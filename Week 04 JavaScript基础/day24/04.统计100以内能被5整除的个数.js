//需求： 遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台（while实现）

// 分析：使用while循环
//       定义一个累加数

// 步骤：
//         1.定义一个变量统计偶数个数
//         2.使用while循环
//         3.使用if语句

// 1.定义一个变量统计偶数个数
var sum=0;
// 2.使用while循环
var a=1;
while(a<=100)
{
    // 3.使用if语句
    if(a%5==0)
    {
        sum++;
    }
    a++
}
console.log(sum)