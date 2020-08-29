const pool = require("../config/dbconfig");
//#region 显示所有用户数据
/**
 *
 *  显示所有用户数据
 * @param {function} callback
 */
module.exports.findUser = (callback) => {
  pool.query(
    `select * from users,institutions WHERE users.id=institutions.id`,
    function (error, results, fields) {
      if (error) throw error;
      callback(results);
      // console.log(results);
    }
  );
};
//#endregion
