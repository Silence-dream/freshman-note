var people01 = new Object ({
    name:"张三",
    age:70,
    height:166,
    weight:"70kg",
    student_number:01,
    phone_number:1383838439,
})

var people02 = new Object({
    name:"李四",
    age:44,
    height:145,
    weight:"88kg",
    student_number:02,
    phone_number:10088666,

})

var people03 = new Object({
    name:"王麻子",
    age:52,
    height:180,
    weight:"75kg",
    student_number:03,
    phone_number:10001,
})

var gender = "gender";
people01[gender] = "男";
people02[gender] = "男";
people03[gender] = "男";

console.log(people01,people02,people03);//验证添加gender：“男”是否成功
console.log(
    people01.name,
    people01.age,
    people02.name,
    people02.age,
    people03.name,
    people03.age,
)

delete people01.weight;
delete people02.weight;
delete people03.weight;
console.log(people01,people02,people03);//验证是否删除体重