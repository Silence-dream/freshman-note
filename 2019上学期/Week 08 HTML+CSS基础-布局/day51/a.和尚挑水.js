// 1.一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？

// 定义变量
let a = 5;
// 定义累加变量
let conut = 0;
while (a <= 80) {
    a += 5;
    conut++
}
console.log(conut);