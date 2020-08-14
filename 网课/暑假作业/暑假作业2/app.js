const express = require("express");
const app = express();
const path = require("path");
const port = 80;

// 配置静态目录
app.use(express.static(path.join(__dirname, "public")));

// ejs配置
app.set("views", path.join(__dirname, "views"));
app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

// 路由导入
const adminLoginRoutes = require("./routes/adminLoginRoutes");
const adminPostRoutes = require("./routes/adminPostRoutes");

// 配置路由
app.use("/admin", adminLoginRoutes);
app.use("/admin", adminPostRoutes);

app.listen(port, () =>
  console.log(`服务器已经启动,请打开http://localhost:${port}`)
);
