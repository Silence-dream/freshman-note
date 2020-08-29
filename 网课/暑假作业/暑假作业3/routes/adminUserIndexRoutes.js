const express = require("express");
const adminUserIndexRoutes = express.Router();
const { findUser } = require("../models/adminUserModels");
adminUserIndexRoutes.get("/UserIndex", (req, res) => {
  findUser(function (result) {
    // console.log(result);
    return res.render("./User/index", { data: result });
  });
});
module.exports = adminUserIndexRoutes;
