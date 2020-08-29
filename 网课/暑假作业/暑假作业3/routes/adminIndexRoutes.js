const express = require("express");
const adminIndexRoutes = express.Router();

adminIndexRoutes.get("/index", (req, res) => {
  return res.render("index");
});

module.exports = adminIndexRoutes;
