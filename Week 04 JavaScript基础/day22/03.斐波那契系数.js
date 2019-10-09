// 需求: 已知一对兔子每个月可以生一对小兔子，而一对兔子从出生后第3个月起每月生一对小兔子。
// 假如一年内没有发生死亡现象，那么，一对兔子一年内（12个月）能繁殖成多少对？ （不要看这些文字）这是著名的斐波那契数列
// 兔子的规律为数列，1，1，2，3，5，8，13，21 ,34,55,89,144    斐波那契系数 前两个数的和等于后一个



// 分析：兔子的规律数列1，1，2，3，5，8，13，21 ,34,55,89,144
//       需要两个变量存开始前两个月的数值
//       需要循环9次来加数值


var moon1=1;
var moon2=1;
var moon_sum=0;//用来存总数

//从第三个月才开始繁殖所以i=2
for(var i=2;i<=11;i++)
{
    moon_sum=moon1+moon2;
    //2        1     1
    //3        1     2
    //5        2     3
    moon1=moon2;
    //1      1
    //2      2
    //3      3
    moon2=moon_sum;
    //2       2
    //3       3
    //5       5
}
console.log(moon_sum);