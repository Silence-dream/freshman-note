// 需求：5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？


// 分析：
// 1.需要定义一个变量放钱
// 2.需要用户if判断买鸡

for ( var i = 0; i <= 20; i++ ){   //公鸡的个数最少和最多
    for (var j = 0; j <= 33; j++){   // 母鸡的个数最少和最多
        var k = 100 -i-j;    //小鸡的个数
        if ( i*5 + j*3 + k/3 == 100 && k%3 ==0 ){
            console.log ( '公鸡:'+i+'母鸡：'+j+'小鸡：'+k+'' );
        }
    }
}