function RunCopyObject(){
    console.log('\r\n',"-".repeat(20),'\r\nCopyObject:');

// объявление объекта
let obj ={
    width: 150,
    height: 270
};

console.log('obj',obj);


// Копирование ссылки объекта (объекты имеют ссылочный тип!)
let cloneRefObj = obj;

obj.height = 300;       // изменяем свойство оригинала
obj.isDelete = false;   // добавляем свойство к оригиналу

console.log('cloneRefObj',cloneRefObj);


// копирование в новый объект
let cloneObj = Object.assign({},obj);

// Еще один способ добавления свойств в объект через копирование(при этом значения имеющихся свойств перезаписываются)
Object.assign(
    cloneObj,
    {
        height: 300,        // свойство будет перезаписано
        color:'red',
        material: 'wood'
    });

console.log('cloneObj',cloneObj);

// объявление объекта
const storeGood = 
{
    number: 1001,
    place: 'A101',
    weight: 25
}

// копируем объект и добавляем к нему новое свойство
const shopGood = Object.assign({}, storeGood,{cost:10});

storeGood.number = 2000;    // изменяем свойство оригинала

console.log('storeGood',storeGood);
console.log('shopGood',shopGood);
}