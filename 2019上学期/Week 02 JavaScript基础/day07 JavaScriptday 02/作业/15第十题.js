// 10.	定义一个数组，里面放都是数字的类型
// 要求：
// 1.把下标是3对应的元素获取到
// 2.把数组第一个元素修改成数字666
// 3.求出下标是2和4对应的元素的和赋值给下表是1

var num = [100,200,300,400,5000];
console.log(num[3]);
num[0]= 666;
console.log(num[0]);

num[1] = num[2]+num[4];
console.log(num[1]);

