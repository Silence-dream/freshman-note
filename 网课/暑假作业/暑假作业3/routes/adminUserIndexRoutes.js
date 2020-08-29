const express = require("express");
const adminUserIndexRoutes = express.Router();
const { findUser, deleteUser } = require("../models/adminUserModels");
// 渲染页面
adminUserIndexRoutes.get("/UserIndex", (req, res) => {
  findUser(function (result) {
    // console.log(result);
    return res.render("./User/index", { data: result });
  });
});
adminUserIndexRoutes.delete("/UserDelete", (req, res) => {
  // console.log(req.body);
  let id = req.body.id - 0;
  deleteUser(id, function (result) {
    if (result) {
      return res.send({
        code: 200,
        msg: "删除成功",
      });
    } else {
      return res.send({
        code: 500,
        msg: "删除失败",
      });
    }
  });
});
module.exports = adminUserIndexRoutes;
