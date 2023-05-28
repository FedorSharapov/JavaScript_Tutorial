// 5 основных типов данных:
// string
// number
// bool
// null
// undefined

function RunDataTypes(){
    // const: постоянная, нельзя переопределять
    const Const = 1;
    //Const +=5 ;    //Uncaught TypeError TypeError: Assignment to constant variable.

    // let: переменная
    let Let = 1;
    Let = 1+5;

    // undefined - неопределенная переменная
    let undefinedVar;
    console.log(undefinedVar);

    // null - пустая переменная
    let nullVar = null;
    console.log(nullVar);

    // string
    console.log('\r\nString:');
    const firstName = "Fedor";
    const lastName = "Sharapov";
    const fullName = firstName + ' ' + lastName;
    console.log(`fullName = ${fullName}`);
    console.log(`Hellow, ${firstName} ${lastName}`);

    // numbers
    console.log('\r\nNumber:');
    console.log(`0.1+0.2=${0.1 + 0.2}`);
    let floatNum = +(0.1 + 0.2).toFixed(3);     // + преобразовывает строку в число
    console.log(`+(0.1+0.2).toFixed(3)=${floatNum}`); 

    console.log(`5+5=${5+5}`);
    console.log(`5-6=${5-6}`);
    console.log(`10/5=${10/5}`);
    console.log(`5*5=${5*5}`);
    console.log(`5%4=${5%4}`);

    let number = 5;
    console.log(`number=${number}`);
    console.log(`++natural=${++number}`);
    console.log(`--natural=${--number}`);

    // Nan - неудачный результат преобразования строки в число
    let nanResult = number + firstName;
    console.log(`number+firstName=${nanResult}`);
    nanResult= firstName * 5;
    console.log(`firstName*5=${nanResult}`);

    // Infinity - результат бесконечности при делении на ноль
    let infinityResult = 5/0;
    console.log(`5/0=${infinityResult}`);

    // Boolean
    console.log('\r\nBool:');
    const boolFalse = false;
    const boolTrue = true;
    console.log(`true && true = ${true && true}`);
    console.log(`true && false = ${true && false}`);
    console.log(`true || false = ${true || false}`);
    console.log(`false || false = ${false || false}`);

    console.log(`!false = ${!false}`);
    console.log(`!true = ${!true}`);

    // TypeOf возвращает строку
    console.log('\r\ntypeof:');
    console.log(typeof true);  
    console.log(typeof 5);    //console.log(typeof(5));
    console.log(typeof '5');
    console.log(typeof undefined);
    console.log(typeof null);       // признаная ошибка, не исправлена для поддержки обратной совместимости

    // Преобразование в число
    console.log('\r\nConvert to number:');  
    let val = 25 / '5';         console.log(`${typeof val}:\t${val}`);    
        val = 25 * '5';         console.log(`${typeof val}:\t${val}`);    
        val = 5 -'5' + 1 + 2;   console.log(`${typeof val}:\t${val}`);    
        val = +'5';             console.log(`${typeof val}:\t${val}`);    
        val = Number('10');     console.log(`${typeof val}:\t${val}`);    
        val = Number(false);    console.log(`${typeof val}:\t${val}`);    
        val = Number(true);     console.log(`${typeof val}:\t${val}`);    
    // Исключения
    val = Number('str10');      console.log(`${typeof val}:\t${val}`);    
    val = Number(undefined);    console.log(`${typeof val}:\t${val}`);    
    val = Number(null);         console.log(`${typeof val}:\t${val}`);    

    // Преобразование в строку
    console.log('\r\nConvert to string:');  
    val = 25 +'5';              console.log(`${typeof val}:\t${val}`);    
    val = 2 + 5 +'5';           console.log(`${typeof val}:\t${val}`);  
    val = '5' + 5 + 2;          console.log(`${typeof val}:\t${val}`);  
    val = String(255);          console.log(`${typeof val}:\t${val}`);
    // Исключения
    val = String(true);         console.log(`${typeof val}:\t${val}`);    
    val = String(undefined);    console.log(`${typeof val}:\t${val}`);    
    val = String(null);         console.log(`${typeof val}:\t${val}`);    

    // Логические преобразования
    console.log('\r\nConvert to Boolean:');  
    // false
    val = Boolean(0);           console.log(`${typeof val}:\t${val}`);    
    val = Boolean('');          console.log(`${typeof val}:\t${val}`);    
    val = Boolean(NaN);         console.log(`${typeof val}:\t${val}`);    
    val = Boolean(undefined);   console.log(`${typeof val}:\t${val}`);    
    val = Boolean(null);        console.log(`${typeof val}:\t${val}`);    
    // все остальные true
    val = Boolean(2);           console.log(`${typeof val}:\t${val}`);    
    val = Boolean('sd');        console.log(`${typeof val}:\t${val}`);    
}