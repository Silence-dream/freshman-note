//1.字符串连接用什么符号？

    // 用  +  号

    //2.如何把一个数字转成字符串？如何把字符串转成整数？
    
        // 2.1使用 变量名=String(num) 转成字符串
        // 使用 Number(num)  把字符串转成整数
        
            // 或者
        // var name="111"
        // console.log(name-0);
        // console.log(typeof(name));
        // 都可以把字符串转成整数

//3.i++和++i有什么区别？

    3.1// i++是先运算再自增
    3.2// ++i是先自增再运算

//4. *=是干什么用的？什么意思？
    // 4.1*=是用来算乘法的
    //4.2  如果 A*=B那么就等于 A=A*B

//5. 求余用哪个符号？
    // 求余用 % 号
//6.==和===的区别？

    // ==的比较比===严格
    //==， 两边值类型不同的时候，要先进行类型转换，再比较
    // ===，不做类型转换，类型不同的一定不等

//7.NaN是什么？

    // NaN是not a Number

//8.NaN == NaN 结果是？

    //是false因为每一个NaN所占用的内存地址都不一样

//9.如何输出a对象中的name属性？

    // 使用 对象名.name 即可输出对象中的name属性

//10.如何删除一个对象中的属性？

    // delete 对象名.对象中的属性名

//11.a是一个二维数组，如何打印第2个元素的第4个元素？

    // var a=[1,[1,2,3,4]]
    // console.log(a[1][3])

//12.什么时候怎么使用  . ？

    // 在调用对象中的属性的时候就使用 . 

//13.编程：计算1~100之间所有能够整除5的数的和？

    // var num=0;
    // for(var i = 1 ; i<=100 ; i++)
    // {
    //     if(i%5==0)
    //     {
    //         num+=i;
    //     }
    // }
    // console.log(num);

//14.分支有几种结构？都是什么？

    // 14.1分支有3种
    // 14.2分别是单向分支if(){}、双向分支if(){}...else{}、多向分支if(){}...else if (){}...else if (){}...

//15.如何查看一个变量的类型？

    // 使用 typeof 变量 查看一个变量的类型

//16. 1=="1"是否相等？ 0=="0"是否相等？

    // 16.1 相等
    // 16.2 相等


//17.并且用什么符号表示？

    // &&

//18.定义一个对象保存姓名和年龄？然后判断如何年龄大于等于18就显示XXX已成年，否则显示XXX未成年

    // var obj={
    //     name:"盖伦",
    //     age:16,
    // }

    // if (obj.age>=18){
    //     console.log(`${obj.age}已成年`)
    // }
    // else if (obj.age<18){
    //     console.log(`${obj.age}未成年`)
    // }

//19.与、或、非的特点？用哪个符号表示？

    //19.1 与的特点是都是true才输出true
    //     或的特点是只要有一个是true就输出true
    //     非的特点是true就输出成false

    // 19.2 与的符号是 &&
    //      或的符号是 ||
    //      非的符号是 !

//20.说出至少三种执行JS代码的方法？

    // 20.1使用浏览器运行js代码
    // 20.2使用vscode调试运行
    // 20.3使用node运行代码

//21.如何定义一个对象？

    // 使用命令 var 对象名={} 定义一个对象

//22.如何打印对象中的一个属性？

    //使用命令 console.log(对象名.对象中的属性名)

//23.如何定义一个数组？如何打印数组中的一个元素？

    // 23.1使用命令 var arr=[]
    //console.log(数组名[下标])

//24.计算1~100之间所有奇数的和？

    // var num=0;
    // for(var i=0;i<=100;i++){
    //     if(i%2==1){
    //         num+=i
    //     }
    // }
    // console.log(num)



//25.定义变量保存学生的分数，根据分数打印优、良、及格、不及格

    // var grade=81;
    // if(grade>=90){
    //     console.log("优");
    // }
    // else if (grade<90 && grade>80){
    //     console.log("良");
    // }
    // else if (grade<=80 && grade>60){
    //     console.log("及格");
    // }
    // else if (grade<=60){
    //     console.log("不及格");
    // }

//26.true && false && true && false的结果。

    // false
//27.false || false || false || ture 的结果。

    // true

//28.!false && !true && !false的结果?

    // false

//29.如何把一个数字转成布尔?

// var num=1008611111;
// console.log(Boolean(num));
