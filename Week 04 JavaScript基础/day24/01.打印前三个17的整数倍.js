// 需求: 打印1-100中前三个是17的整数倍的数。


// 分析：既然要打印前三个17的倍数，那么就需要if语句循环语句


// 步骤：
//     1.使用循环
//     2.使用if语句判断0


for(var i=1;i<=100;i++)
{
    if(i%17==0)
    {
        console.log(i);
    }
}