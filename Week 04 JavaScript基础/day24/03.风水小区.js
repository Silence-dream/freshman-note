//需求： 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。

// 分析：打印出小区的楼号但是不包括4、7、14、18、24

// 步骤:
//     1.使用循环历遍1-30
//     2.使用if让不吉利的数字不出现

// 1.使用循环历遍1-30
for(var a=1;a<=30;a++)
{
    // 2.使用if让不吉利的数字不出现
    if(a!=4&&a!=7&&a!=14&&a!=18&&a!=24)
    {
        console.log(a);
    }
}