// 7.	大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，要用100匹马，驮100石粮食，该如何调配？


//循环定义大马数量
for (var dm = 0; dm <= 100; dm++) {
    //定义大马驮的粮食石数
    var num1 = dm * 2
    //循环定义中马数量
    for (var zm = 0; zm <= 100; zm++) {
      //定义中马驮的粮食石数
      var num2 = zm * 1
      //循环定义小马数量
      for (var xm = 0; xm <= 100; xm++) {
        //定义小马驮的粮食石数
        var num3 = zm / 2
        //满足一共100匹马，驮100石粮食
        if (dm + zm + xm === 100 && num1 + num2 + num3 === 100) {
          console.log(`大马${dm}匹，中马${zm}匹，小马${xm}匹`);
  
        }
      }
    }
  }
