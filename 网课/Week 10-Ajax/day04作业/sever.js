// 1. 静态页面模板已经给定，接口和ajax请求都需要自己写

// 2. 在index.html页面中点击"提交"按钮发起ajax请求，请求成功之后把数据添加到 `data.json`,并且跳转到`list.html`

// 3. 当跳转到`list.html`页面的时候，展示的是`data.json`里面你刚才添加的数据

// 注意: 在`index.html`页面中只要有一个没有传数据，那么整条数据就不添加到`data.json`文件里面


const express = require('express');
const app = express();
const port = 80;
const fs = require("fs");
const path = require("path");
app.use(express.static(path.join(__dirname, "students"), {
  index: "index.html"
}))

/* 保存传输过来的数据 */
let objInfo = {};
//保存为数组
let arrInfo = [];
let count = 0;
app.get('/index', (req, res) => {
  // console.log(req.query);
  objInfo = req.query;
  arrInfo.push([objInfo]);

  // console.log(arrInfo.length);

  for (const key in objInfo) {
    if (objInfo[key] == "") {
      res.send("请把表单填写完整");
      return;
    } else {

      fs.writeFile("./data.json", JSON.stringify(arrInfo), function (err) {
        if (err != null) {
          console.log("写入失败");
          return;
        }
        count += 100;
        console.log("count=", count);
        console.log("写入成功");
      })
      res.send("发送成功");
      return;
    }
  }
})

app.get("/students", (req, res) => {
  fs.readFile("data.json", "utf8", function (err, data) {
    if (err != null) {
      res.send("没有读取到文件")
      return;
    }
    res.send(JSON.parse(data))
  })
})





app.listen(port, () => {
  console.log(`http://localhost`)
})