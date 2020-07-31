const express = require("express");
const adminIndexRouter = express.Router();
// 连接数据库模组
// const { userLogin } = require("../models/adminLoginModels");

// 页面渲染
adminIndexRouter.get("/index", (req, res) => {
  res.render("index");
});

module.exports = adminIndexRouter;
