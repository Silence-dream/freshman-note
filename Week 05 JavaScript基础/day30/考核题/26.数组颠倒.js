
// 26.  将下面的数组元素前后互换
// [11, 32,55, 47,79,23]	
//  置换后的数组元素为：
//  [23, 79, 47, 55, 32, 11]


var arr = [11, 32, 55, 47, 79, 23];
var brr = [];
//逆序循环
for (var i = arr.length - 1; i > 0; i--) {
    brr[brr.length]=arr[i]//逆序添加即可翻转
}
console.log(brr);
