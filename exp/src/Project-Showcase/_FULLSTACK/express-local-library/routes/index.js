import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.redirect("/catalog");
});

export default router;
