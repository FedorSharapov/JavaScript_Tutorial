function RunAddDeleteProperties(){
    console.log('\r\n',"-".repeat(20),'\r\nAddDeleteProperties:');

let block = { width: 150};

// изменение значения свойства
block.width = 200;

// добавление свойств
block.height = 300;
block['color'] = 'red';
console.log(block);

// проверка наличия свойства в объекте
let hasWidth = 'width' in block;
let hasMaterial = 'material' in block;
console.log(hasWidth,hasMaterial);

// удалить свойство
delete block.color;
const heightB = 'height';
delete block[heightB];
console.log(block);
}