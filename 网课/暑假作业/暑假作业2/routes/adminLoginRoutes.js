const express = require("express");

const adminLoginRoutes = express.Router();

adminLoginRoutes.get("/login", (req, res) => {
  res.render("login");
});

module.exports = adminLoginRoutes;
