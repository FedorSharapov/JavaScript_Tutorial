function RunDestructurizationObjects(){
console.log('\r\n',"-".repeat(20),'\r\nDestructurizationObjects:');

// объект
let blockD = 
{
    width: 170,
    height: 90,
    price: 290,
    type: 'solid'
}

// деструктризация объекта
let widthD = blockD.width;
let heightD = blockD.height;
let priceD = blockD.price;
let typeD = blockD.type;

// упрощенная деструктуризация объекта
// название переменных должны совпадать с названием свойств объекта
let {width, height, price, type} = blockD;

console.log('widthD',widthD);
console.log('width',width);

// упрощенная деструктуризация объекта 
// c указанием имени width: widthA
// c указанием значения по-умолчанию heightA = 100
let {width: widthA, heightA = 100} = blockD;

console.log('widthA',widthA);
console.log('heightA',heightA);

// деструктуризация с новым объкетом с оставшимися свойствами
// ... спред оператор
let {width:widthC, height:heightC, ...rest} = blockD;

console.log('widthC',widthC);
console.log('heightC',heightC);
console.log('rest',rest);

// деструктуризация объекта с вложенными объектами
let blockE = 
{
    width: 170,
    height:{
        value: 50,
        unit: 'cm'
    }
}

let {
    width:widthE,
    height:{value:valueC,unit}
} = blockE;

console.log('valueC',valueC);
console.log('unit',unit);
}