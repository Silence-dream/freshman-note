const express = require("express");
const moment = require("moment");
const adminPostRoutes = express.Router();

// 导入数据库方法
const {
  allPosts,
  pagePosts,
  addPosts,
} = require("../models/adminFindPostsModels");

// 写文章渲染
adminPostRoutes.get("/add", (req, res) => {
  // console.log(moment().format());
  res.render("post-add");
});
// 写文章传入内容
adminPostRoutes.post("/addPosts", (req, res) => {
  // 保存用户id
  req.body.uid = req.session.user.uid;
  // console.log(req.body.status);
  // 如果没填写时间那么为当前时间
  if (req.body.created == "") {
    req.body.created = moment().format("YYYY-MM-DD");
  }
  console.log(req.body);
  //保存数据
  addPosts(req.body);
});
adminPostRoutes.get("/edit", (req, res) => {
  res.render("post-edit");
});
// 所有文章
adminPostRoutes.get("/posts", (req, res) => {
  allPosts(0, 3, function (result) {
    for (let i = 0; i < result.length; i++) {
      // 日期转换
      result[i].publish_time = moment(result[i].publish_time).format(
        "YYYY-MM-DD"
      );
    }
    // 测试代码
    // console.log(moment("2016-10-06T16:00:00.000Z").format("YYYY-MM-DD"));
    res.render("posts", { posts: result });
    // console.log(result);
    // console.log(result.length);
  });
});

adminPostRoutes.post("/getPosts", (req, res) => {
  // 得到页码
  // console.log(req.body);
  /**
   *
   * @param {object} obj 空对象判断
   * true是空对象 false不是空对象
   */
  function isEmptyObject(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }

  if (isEmptyObject(req.body) == true) {
    pagePosts(0, 3, function (result) {
      return res.send({
        code: 200,
        data: result,
        msg: "没有传入参数",
      });
    });
  } else {
    let pageNow = parseInt(req.body.pageNow);
    let pageSize = parseInt(req.body.pageSize);
    // console.log(pageNow);
    // console.log(pageNow, pageSize);
    pagePosts(pageNow, pageSize, function (result) {
      return res.send({
        code: 200,
        data: result,
        msg: "传了参数",
      });
    });
  }
});
module.exports = adminPostRoutes;
