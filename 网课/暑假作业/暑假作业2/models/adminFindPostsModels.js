// 导入数据连接配置
const pool = require("../config/dbconfig");

module.exports.allPosts = (pageUp, pageDown, callback) => {
  //#region 设置默认参数
  if (!pageUp) {
    pageUp = 0;
  }
  if (!pageDown) {
    pageDown = 3;
  }
  //#endregion

  pool.query(`select * from posts limit ${pageUp},${pageDown}`, function (
    error,
    result,
    fields
  ) {
    if (error) throw error;
    callback(result);
    // console.log(result);
  });
};

/**
 *
 *
 * @param {number} pageNow 当前页码
 * @param {number} pageSize  一次需要渲染多少个数据
 * @param {function} callback 回调函数,返回文章数据
 */
module.exports.pagePosts = (pageNow, pageSize, callback) => {
  //#region 注释
  /**
   * pageNow  当前页码
   * pageSize 一次显示多少
   * pageUp  limit前数字
   * pageDown 给下一页的自定义属性
   */
  /**
   *limit前数字
   */

  let pageUp = pageNow * pageSize - 3 || 0;
  /**
   * limit后数字
   */
  let pageDown = pageNow * pageSize || 3;

  // console.log(pageDown);
  // console.log("你好", Math.ceil(pageDown / pageSize));
  if (pageUp <= 0) pageUp = 0;
  //#endregion
  // console.log(pageUp);
  // console.log(pageDown);
  pool.query(
    `SELECT * FROM posts LIMIT ${pageUp},${pageDown};
     SELECT * FROM posts
  `,
    function (error, result, fields) {
      if (error) throw error;
      // 返回分页信息 result
      // 返回一共可以渲染多少个页码
      /**
       *pageNumBer 返回可以渲染多少个页码
       */
      let pageNumBer = [];
      pageNumBer.length = Math.ceil(result[1].length / pageSize);
      // 得到一共多少条数据
      // console.log(result[1].length);
      callback({
        postsData: result,
        pageNumBer: pageNumBer,
        pageNow: pageDown / pageSize,
      });
    }
  );
};
