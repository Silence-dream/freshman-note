// 15. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]	

var arr=[11,32,55,47,79,23];
var max=arr[0];

for(var i=0;i<arr.length;i++)
{
    var cur=arr[i];
    cur>max? max=cur :null
}
console.log(max)