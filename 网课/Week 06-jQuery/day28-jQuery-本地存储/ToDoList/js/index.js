$(function () {
    load();
    // - 功能1：在表单输入框输入内容，点击”添加”按钮或者点击”enter”键，输入的内容就会添加到”正在进行的任务”列表里面
    // 添加按钮
    // 数组保存传入的数据
    let dateArr = [];
    $(".add").on("click", function () {
        event();
    });
    $(".txt").on("keypress", function (e) {

        // 按下回车键
        if (e.keyCode == 13) {
            event();
        }
    });
    // - 功能2：如果表单的内容为空，点击”添加”按钮或者点击”enter”键的时候会提示”内容不能为空”，空字符串就不会被添加道下面

    //   的”正在进行的任务”列表里面

    // - 功能3: 当点击”正在进行的任务”列表里面的某一项的复选框，选中的那一项列表就会被添加到”已经完成的任务”列表里面，而
    $(".w ol").on("click", "input", function () {
        // 得到点击的复选框状态
        let flag = $(this).prop("checked")
        // 得到点击的内容
        let content = $(this).siblings("span").html();
        // 得到本地存储数据的数组形式
        let date = JSON.parse(getDate());

        for (let i = 0; i < date.length; i++) {
            if (date[i].content == content) {
                date[i].done = flag;
            }
        }

        saveDate(JSON.stringify(date))
        load();


        // let i = $(this).parent().index();
        // console.log("点击的索引" + i);
        // // 得到本地存储数据的数组形式
        // let date = JSON.parse(getDate());
        // // 得到要修改的索引
        // let dateI = date.length - 1 - i;
        // console.log(date);

        // console.log("修改的" + dateI);

        // // console.log(date[dateI]);
        // // 修改点击的复选框的done
        // date[dateI].done = flag;
        // // console.log(date[dateI]);
        // // 然后重新保存进存储里面
        // saveDate(JSON.stringify(date))
        // load();
    });
    //   且会从“正在进行的任务”中删除这一项

    // - 当刷新浏览器之后，页面还是保持不变(注：之前的数据不会消失)
    // console.log(getDate());

    // 得到本地存储数据
    function getDate() {
        let date = localStorage.getItem("todolist");
        if (date != null) {
            return date
        } else {
            return "[]"
        }
    }
    // 保存数据

    function saveDate(date) {
        localStorage.setItem("todolist", date);
    }

    // 渲染数据
    function load() {
        $(".w ol").empty();
        $(".w ul").empty();
        // 得到本地存储数据的数组形式
        let date = JSON.parse(getDate());
        $(date).each(function (index, element) {
            // 得到内容
            let content = element.content;
            // console.log(element.done);
            // console.log(content);
            // console.log(date[index].done);
            if (date[index].done == false) {
                $(".w ol").prepend(`
                <li>
                <input type="checkbox">
                <span>${date[index].content}</span>
              </li>
                `);
            } else {
                $(".w ul").prepend(`
                    <li>
                    <span>${date[index].content}</span>
                  </li>
                    `);
            }
        })
    }


    // console.log($(".w ol").val());

    // 添加进行中的任务
    function event() {


        // 得到内容
        let a = $(".txt").val().trim();
        if (a) {
            $(".w ol").empty()
            // 得到保存的内容
            let content = $(".txt").val();
            dateArr.push({
                content: content,
                done: false
            })
            // console.log(dateArr);
            let date = JSON.stringify(dateArr)
            // 把得到的数据保存
            saveDate(date);
            load();
            $(".txt").val("");
        } else {
            alert("内容不能为空");
        }

    }
});