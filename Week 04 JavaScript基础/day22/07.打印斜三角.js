// 需求:
//     **********    九个
//    *******       七个
//   *****          五个
//  ***
// *

// 分析：从下往上是1、3、5、7、9
// 前面的空格是1、2、3、4、5

//需要一个大循环循环5次
for (var l = 1; l <= 5; l++) {
    var str = "";
    for (var j = 1; j <= 5-l; j++) {//此循环打印空格   j应该每次循环都减少1
        str += " ";
    }
    // console.log(str);//留着测试空格是否输出成功使用
    for (var i = 1; i <= 11-(l*2); i++) {//此循环打印星星    i应该每次循环都减少2
        str += "*";
    }
    console.log(str);
}




