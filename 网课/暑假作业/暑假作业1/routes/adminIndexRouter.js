const express = require("express");
const adminIndexRouter = express.Router();
// 连接数据库模组
const { findhero } = require("../models/adminIndexModels");

// 页面渲染
adminIndexRouter.get("/index", (req, res) => {
  res.render("index");
});

// 获取英雄数据
adminIndexRouter.post("/index", (req, res) => {
  findhero(function (result) {
    return res.send({
      code: 200,
      data: result,
    });
  });
});

module.exports = adminIndexRouter;
