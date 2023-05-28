function RunValueComparison(){
    // Сравнение чисел
    console.log('\r\n',"-".repeat(20),'\r\nValue comparison:');
    let compareVal;
    compareVal = 25 > 15;   console.log(`25 > 15:\t${compareVal}`);    
    compareVal = 25 < 15;   console.log(`25 < 15:\t${compareVal}`);
    compareVal = 25 != 15;  console.log(`25 != 15:\t${compareVal}`);
    compareVal = 15 >= 15;  console.log(`15 >= 15:\t${compareVal}`);
    compareVal = 15 == 15;  console.log(`15 == 15:\t${compareVal}`);

    // сравнение числа со строкой
    compareVal = 5 <'25';       console.log(`5 <'25':\t${compareVal}`);
    compareVal = '25' < 10;     console.log(`'25' < 10:\t${compareVal}`);
    compareVal = '25sde' > 10;  console.log(`'25sde' > 10:\t${compareVal}`);
    compareVal = '15' == 15;    console.log(`'15' == 15:\t${compareVal}`);
    compareVal = '15' === 15;   console.log(`'15' === 15:\t${compareVal}`); // строгое сравнение без приведения типов
    compareVal = '1' != 1;      console.log(`'1' != 15:\t${compareVal}`);
    compareVal = '1' !== 1;     console.log(`'1' !== 1:\t${compareVal}`); // строгое сравнение без приведения типов


    // логические выражения: !, &&, ||
    // порядок выполнения операций: !, &&, ||
    compareVal = (16 > 15) && (15 < 30);                        
    console.log(`(16 > 15) && (15 < 30):\t${compareVal}`);

    compareVal = (12 < 5) || !('one' === 'one') && (24 > 0);    
    console.log(`(12 < 5) || !('one' === 'one') && (24 > 0):\t${compareVal}`);

    compareVal = null && !(12 > 5) || ('text'.length === 4);    
    console.log(`null && !(12 > 5) || ('text'.length === 4):\t${compareVal}`);

    compareVal = Boolean(null) && ( !(12 > 5) || ('text'.length === 4) );   
    console.log(`null && ( !(12 > 5) || ('text'.length === 4) ):\t${compareVal}`);
}