// 11.下列代码控制台打印出的值是多少？
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // ?
a[7](); // ?
a[8](); // ?
a[9](); // ?

//因为i是被let声明的，i只在当前循环内有作用，每一次循环都相当于一个新的变量所以分别输出的是6、7、8、9

// var 命令的变量提升机制，var 命令实际只会执行一次。

// 而 let 命令不存在变量提升，所以每次循环都会执行一次，声明一个新变量（但初始化的值不一样）。