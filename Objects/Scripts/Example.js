console.log('\r\n',"-".repeat(20),'\r\nExampleDelete:');

// Пример1
const automobile = 
{
    model: 'Audi',
    color: 'red',
    year: 2012
}

const input = prompt('Enter a property:');
const hasProp = input in automobile;

if(hasProp)
    delete automobile[input];
else
    automobile[input] = null;

console.log(automobile);

// Пример2 

let person ={
    firstName: 'Sam',
    years: 25
}

let {firstName, years: age, heightE = null} = person;

console.log(firstName,age,heightE);