// 连接数据库

const pool = require("../config/dbconfig");

// //#region 根据英雄名字模糊查询
// module.exports.fuzzySearch = (queryName, callback) => {
//   pool.query(`SELECT * FROM hero WHERE hname LIKE '%${queryName}%'`, function (
//     error,
//     results,
//     fields
//   ) {
//     if (error) throw error;
//     callback(results);
//     // console.log(results);
//   });
// };
// //#endregion
