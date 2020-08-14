const express = require("express");

const adminPostRoutes = express.Router();

adminPostRoutes.get("/add", (req, res) => {
  res.render("post-add");
});
adminPostRoutes.get("/edit", (req, res) => {
  res.render("post-edit");
});
adminPostRoutes.get("/posts", (req, res) => {
  res.render("posts");
});

module.exports = adminPostRoutes;
