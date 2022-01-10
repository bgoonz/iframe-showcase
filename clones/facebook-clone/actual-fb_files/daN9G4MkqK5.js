if (self.CavalryLogger) {
  CavalryLogger.start_js(["sCmrhz5"]);
}

__d(
  "CometFeedFocusMedia.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        media: {
          bottom: "i09qtzwb",
          end: "n7fi1qx3",
          height: "datstx6m",
          position: "pmk7jnqg",
          start: "j9ispegn",
          top: "kr520xx4",
          width: "k4urcfbm",
        },
        root: {
          height: "do00u71z",
          overflowX: "ni8dbmo4",
          overflowY: "stjgntxs",
          position: "l9j0dhe7",
        },
        wrapper: { position: "pmk7jnqg", top: "kr520xx4" },
      };
    function a(a) {
      var b,
        d = a.children,
        e = a.mediaHeight,
        f = a.mediaWidth,
        g = a.viewportAspectRatio,
        j = a.xstyle;
      b = (b = a.focusX) != null ? b : 0.5;
      a = (a = a.focusY) != null ? a : 0.5;
      var k = f / e,
        l,
        m,
        n,
        o;
      k < g
        ? ((a = a),
          (l = g / k),
          (n = "calc((" + g + "/(" + f + "/" + e + "))*100%)"),
          (o = "100%"),
          (m = "top"))
        : ((a = b),
          (n = "100%"),
          (l = k / g),
          (o = "calc(((" + f + "/" + e + ")/" + g + ")*100%)"),
          (m = "left"));
      b = Math.max(Math.min(0.5 - l * a, 0), 1 - l);
      return h.jsx("div", {
        className: c("stylex")(i.root, j),
        style: { paddingTop: 100 / g + "%" },
        children: h.jsx("div", {
          className: c("stylex")(i.wrapper),
          style:
            ((k = { height: n }), (k[m] = b * 100 + "%"), (k.width = o), k),
          children: typeof d === "function" && d(i.media),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedStoryMediaLayoutConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 1 / 1.5;
    b = 750;
    c = -325;
    d = 500;
    f.DEFAULT_MIN_ASPECT_RATIO = a;
    f.LOWER_BOUND_MIN_HEIGHT = b;
    f.MAX_HEIGHT_VIEWPORT_ADJUSTMENT = c;
    f.MIN_WIDTH_MAX = d;
  },
  66
);
