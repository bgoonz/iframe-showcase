import Book from "../models/book";
import Author from "../models/author";
import Genre from "../models/genre";
import BookInstance from "../models/bookinstance";
import {body, validationResult} from "express-validator";
import async from "async";

export function index(req, res) {
  async.parallel(
    {
      book_count(callback) {
        Book.countDocuments({}, callback);
      },
      book_instance_count(callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
}

// Display list of all books.
export function book_list(req, res, next) {
  Book.find({}, "title author")
    .populate("author")
    .exec((err, list_books) => {
      if (err) {
        return next(err);
      } else {
        // Successful, so render
        res.render("book_list", { title: "Book List", book_list: list_books });
      }
    });
}

// Display detail page for a specific book.
export function book_detail({params}, res, next) {
  async.parallel(
    {
      book(callback) {
        Book.findById(params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance(callback) {
        BookInstance.find({ book: params.id }).exec(callback);
      },
    },
    (err, {book, book_instance}) => {
      if (err) {
        return next(err);
      }
      if (book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("book_detail", {
        title: book.title,
        book: book,
        book_instances: book_instance,
      });
    }
  );
}

// Display book create form on GET.
export function book_create_get(req, res, next) {
  // Get all authors and genres, which we can use for adding to our book.
  async.parallel(
    {
      authors(callback) {
        Author.find(callback);
      },
      genres(callback) {
        Genre.find(callback);
      },
    },
    (err, {authors, genres}) => {
      if (err) {
        return next(err);
      }
      res.render("book_form", {
        title: "Create Book",
        authors: authors,
        genres: genres,
      });
    }
  );
}

// Handle book create on POST.
export const book_create_post = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),
  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped and trimmed data.
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: req.body.genre,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      async.parallel(
        {
          authors(callback) {
            Author.find(callback);
          },
          genres(callback) {
            Genre.find(callback);
          },
        },
        (err, {genres, authors}) => {
          if (err) {
            return next(err);
          }

          // Mark our selected genres as checked.
          for (let i = 0; i < genres.length; i++) {
            if (book.genre.includes(genres[i]._id)) {
              genres[i].checked = "true";
            }
          }
          res.render("book_form", {
            title: "Create Book",
            authors: authors,
            genres: genres,
            book: book,
            errors: errors.array(),
          });
        }
      );
      return;
    } else {
      // Data from form is valid. Save book.
      book.save(err => {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new book record.
        res.redirect(book.url);
      });
    }
  },
];

// Display book delete form on GET.
export function book_delete_get({params}, res, next) {
  async.parallel(
    {
      book(callback) {
        Book.findById(params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_bookinstances(callback) {
        BookInstance.find({ book: params.id }).exec(callback);
      },
    },
    (err, {book, book_bookinstances}) => {
      if (err) {
        return next(err);
      }
      if (book == null) {
        // No results.
        res.redirect("/catalog/books");
      }
      // Successful, so render.
      res.render("book_delete", {
        title: "Delete Book",
        book: book,
        book_instances: book_bookinstances,
      });
    }
  );
}

// Handle book delete on POST.
export function book_delete_post(req, res, next) {
  // Assume the post has valid id (ie no validation/sanitization).

  async.parallel(
    {
      book(callback) {
        Book.findById(req.body.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_bookinstances(callback) {
        BookInstance.find({ book: req.body.id }).exec(callback);
      },
    },
    (err, {book_bookinstances, book}) => {
      if (err) {
        return next(err);
      }
      // Success
      if (book_bookinstances.length > 0) {
        // Book has book_instances. Render in same way as for GET route.
        res.render("book_delete", {
          title: "Delete Book",
          book: book,
          book_instances: book_bookinstances,
        });
        return;
      } else {
        // Book has no BookInstance objects. Delete object and redirect to the list of books.
        Book.findByIdAndRemove(req.body.id, function deleteBook(err) {
          if (err) {
            return next(err);
          }
          // Success - got to books list.
          res.redirect("/catalog/books");
        });
      }
    }
  );
}

// Display book update form on GET.
export function book_update_get({params}, res, next) {
  // Get book, authors and genres for form.
  async.parallel(
    {
      book(callback) {
        Book.findById(params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      authors(callback) {
        Author.find(callback);
      },
      genres(callback) {
        Genre.find(callback);
      },
    },
    (err, {book, genres, authors}) => {
      if (err) {
        return next(err);
      }
      if (book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Success.
      // Mark our selected genres as checked.
      for (
        let all_g_iter = 0;
        all_g_iter < genres.length;
        all_g_iter++
      ) {
        for (
          let book_g_iter = 0;
          book_g_iter < book.genre.length;
          book_g_iter++
        ) {
          if (
            genres[all_g_iter]._id.toString() ===
            book.genre[book_g_iter]._id.toString()
          ) {
            genres[all_g_iter].checked = "true";
          }
        }
      }
      res.render("book_form", {
        title: "Update Book",
        authors: authors,
        genres: genres,
        book: book,
      });
    }
  );
}

// Handle book update on POST.
export const book_update_post = [
  // Convert the genre to an array.
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // Validate and santitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
      _id: req.params.id, // This is required, or a new ID will be assigned!
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form
      async.parallel(
        {
          authors(callback) {
            Author.find(callback);
          },
          genres(callback) {
            Genre.find(callback);
          },
        },
        (err, {genres, authors}) => {
          if (err) {
            return next(err);
          }

          // Mark our selected genres as checked.
          for (let i = 0; i < genres.length; i++) {
            if (book.genre.includes(genres[i]._id)) {
              genres[i].checked = "true";
            }
          }
          res.render("book_form", {
            title: "Update Book",
            authors: authors,
            genres: genres,
            book: book,
            errors: errors.array(),
          });
        }
      );
      return;
    } else {
      // Data from form is valid. Update the record.
      Book.findByIdAndUpdate(req.params.id, book, {}, (err, {url}) => {
        if (err) {
          return next(err);
        }
        // Successful - redirect to book detail page.
        res.redirect(url);
      });
    }
  },
];
