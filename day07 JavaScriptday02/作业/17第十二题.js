var DX = [
    {
        name:"XiaoMing",
        age:19,
        gender:"男",
        studentId:01,
    }
    ,
    {
        name:"XiaoHome",
        age:18,
        gender:"女",
        studentId:02,
    }
]
console.log(DX[1].name);
DX[0].name=18;
console.log(DX[0].name);//验证修改18
var age;
age = DX[0].age+DX[1].age;
console.log(age);

