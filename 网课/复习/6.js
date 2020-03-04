var str = 'abCDefG';
var large = 0;
var small = 0;
for (let char of str) {
    if (char == char.toUpperCase()) {
        large++
    } else {
        small++
    }
    console.log();
}
console.log(str.toLowerCase() + ';' + large + '次大写');
console.log(str.toUpperCase() + ';' + small + '次小写');