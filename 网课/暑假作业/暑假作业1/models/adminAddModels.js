// 连接数据库
const pool = require("../config/dbconfig");
//#region 验证登陆
module.exports.addHero = (obj, callback) => {
  pool.query(
    `INSERT INTO hero (hname,nickname,skill) VALUES ('${obj.hname}','${obj.nickname}','${obj.skill}'); `,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
    }
  );
};
//#endregion
