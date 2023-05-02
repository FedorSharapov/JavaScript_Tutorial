console.log('\r\n',"-".repeat(20),'\r\nFunction:');

// функции без параметров без результата
function loggerNewLine(){
    console.log('\r\n');
}

loggerNewLine();

// объявление функции без параметров c возвращение результата
function helloWorld(){
    return 'Hello world!';
}

// функции c параметром без результата
function logger(str){
    console.log(str);
}

logger( helloWorld() );

// объявление функции c параметрами c возвращение результата
function sum(a,b){
    return a + b;
}

const num1 = 5;
const num2 = 4;
const sumResult = sum(num1,num2);
console.log('sumResult', sumResult);

// анонимная функция
let a = 5;
console.log( 
    function() { return a > 0? ++a :--a; }()
);

// Стрелочные функции
var weekdays = [
    'Mondey',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
console.log(
    weekdays.map( wd => wd.length));

const area = (a,b) => a * b;
console.log('area', (a, b) => a * b);