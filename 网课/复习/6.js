// 5. 判分小程序： 学生答案var str = "a#ab#c#D#a", 正确答案var ans = "A#AC#C#BD#B", 表示一共5题， 答对一题3分
// 定义函数， 接收学生答案和正确答案， 计算学生得分并返回分数

//  学生答案
var str = "a#ab#c#D#a"
// 正确答案
var ans = "A#AC#C#BD#B"

function getTureOrFalse(str, ans) {
    // 转数组
    // 转大写
    let aStr = str.toUpperCase().split("#");
    let aAns = ans.split("#");
    // 定义分数
    let sum = 0;
    // console.log(str.toUpperCase().split("#"))
    // console.log(ans.split("#"))
    for (let i = 0; i < aAns.length; i++) {
        if (aStr[i] == aAns[i]) {
            sum += 3;
        }
    }
    return sum;
}

console.log(getTureOrFalse(str, ans));