var arr = [4, 2, 7, 5, 3, 1, 6, 9, 8];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        // 如第一个小于第二个就交换他们的位置
        if (arr[j] < arr[j + 1]) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}

console.log(arr);