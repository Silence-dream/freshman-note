// 2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和
var arr=[11,22,33,44,55];
var long=arr.length;
var sum=0;
for(var i=0;i<long;i++)
{
    sum+=arr[i];
}
console.log(sum);
