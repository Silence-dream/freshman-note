$(function () {
  // 页面载入从数据库获取英雄数据
  $.ajax({
    type: "post",
    url: "/index",
    data: null,
    success: function (response) {
      // console.log(response);
      var heroStr = template("heroTemplate", response);
      $("tbody").empty();
      // console.log(heroStr);
      $("tbody").html(heroStr);
    },
  });
});
