// 引包
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
//
const session = require("express-session");
const mysql = require("mysql");
const ejs = require("ejs");

// 接收post请求中间件
app.use(express.urlencoded({ extended: false }));

//引用ejs
app.set("views", "views"); //设置视图的对应目录
app.set("view engine", "ejs"); //设置默认的模板引擎
app.engine("ejs", ejs.__express); //定义模板引擎

// 路由配置引入
const adminLoginRouter = require("./routes/adminLoginRouter");
const adminIndexRouter = require("./routes/adminIndexRouter");

app.use(express.static(path.join(__dirname, "public")));

// session配置
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
// 登陆拦截
app.use(function (req, res, next) {
  // 得到当前的url
  let url = req.originalUrl;
  // 如果不是登陆页面就跳转过去
  if (url != "/admin/login" && !req.session.user) {
    return res.redirect("/admin/login");
  }
  // console.log("appppppppppppppp");
  // console.log(req.session);
  next();
});

// 挂载路由
app.use(adminIndexRouter);
app.use("/admin", adminLoginRouter);

app.listen(port, () => console.log(`http://localhost:3000`));
