// 连接数据库
const pool = require("../config/dbconfig");
//#region 查询英雄列表
module.exports.findhero = (callback) => {
  pool.query(`select * from hero `, function (error, results, fields) {
    // callback(results);
    if (error) throw error;
    // console.log(results);
    callback(results);
  });
};
//#endregion
