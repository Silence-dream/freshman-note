
// 1. 已知数组{ "周兴迟", "刘一飞", "赵本善", "孙妍姿", "王妃", "陈怡迅" }.
// 请查找出数组中是否有孙妍姿、汪菲。
// 如果有，请给出索引；
// 如果没有给出 - 1。

let set = new Set(["周兴迟", "刘一飞", "赵本善", "孙妍姿", "王妃", "陈怡迅"]);

//        转成Array          看看在不在
console.log([...set].indexOf("孙妍姿"));
console.log([...set].indexOf("汪菲"));


