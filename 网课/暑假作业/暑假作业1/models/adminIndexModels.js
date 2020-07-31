// 连接数据库
const pool = require("../config/dbconfig");
//#region 验证登陆
module.exports.findhero = (callback) => {
  pool.query(`select * from hero `, function (error, results, fields) {
    // callback(results);
    if (error) throw error;
    // console.log(results);
    callback(results);
  });
};
//#endregion
