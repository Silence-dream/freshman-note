const express = require("express");
const moment = require("moment");
const adminPostRoutes = express.Router();

// 导入数据库方法
const { allPosts, pagePosts } = require("../models/adminFindPostsModels");

adminPostRoutes.get("/add", (req, res) => {
  res.render("post-add");
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
