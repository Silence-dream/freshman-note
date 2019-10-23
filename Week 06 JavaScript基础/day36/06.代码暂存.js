for (key in studentArr) {
    // 判断是否有重复的姓名
    if (studentArr[key].name == userName) {
        alert(`已经存在${userName}请重新输入`);
    }
    else {
        studentArr[studentArr.length] = { sID: 1, name: `${userName}`, age: 18, score: 80 }
    }
}


${ studentArr[1].sID } ${ studentArr[1].name } ${ studentArr[1].age } ${ studentArr[1].score } `)
                        temp = false;