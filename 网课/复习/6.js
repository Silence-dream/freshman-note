function getPlus(str) {
    let arr = str.split("");
    // 定义结果 
    let result = [];
    // console.log(str.split(""))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= "0" && arr[i] <= "9") {
            // 定义空字符串
            let num = "";
            // i后面全是数字进行拼接
            for (let j = i; j < arr.length; j++) {
                num += arr[j];
            }
            // 最后+1
            let an = Number(num) + 1;
            result.push(an)
            break;
        } else {
            // 不是数字的先存入数组
            result.push(arr[i]);
        }
    }
    return result.join("");
}

console.log(getPlus("ATD529"));