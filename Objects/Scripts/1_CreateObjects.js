console.log('\r\n',"-".repeat(20),'\r\nCreateReadObjects:');

// создание объекта
const auto = {
    model: 'Audi',
    color: 'red',
    year: 2012
}
console.log(auto);

// значения свойств
const model = auto['model'];
const color = auto.color;

console.log(model,color);