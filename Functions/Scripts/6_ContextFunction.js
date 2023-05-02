console.log('\r\n',"-".repeat(20),'\r\nContextFunction:');

// использование контекста свойств объекта с помощью this.
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      console.log(`${this.firstName} ${this.lastName}`);
    }
  };

  // второй способ записи
const person2 = {
    firstName: "Java",
    lastName: "Script",
    fullName() {
      console.log(`${this.firstName} ${this.lastName}`);
    }
};

// вызов метода
person.fullName();
person2.fullName();

// this в контексте разных объектов
// Стрелочная функция не создает контекст и ее в таком случае нельзя использовать!!
function greet(){
  console.log(`Hello ${this.firstName}`);
}

const user1 = {firstName:'John', lastName: 'Doe'};
const user2 = {firstName:'Sam'};
user1.func = greet;
user2.func = greet;
user1.func();
user2.func();

// call() может использовать метод, принадлежащий другому объекту.
person2.fullName.call(user1);

// с помощью call() можно вызвать функцию, которая не является методом объекта
greet.call(user2);
greet.call(person);

// call c параметром
const obj = {num: 50};

function sum(a,b){
  return a + b + this.num;
}

const result = sum.call(obj,20,5);
console.log('result =', result);

// apply работает также как call, но параметры передаются массивом
console.log('result =', sum.apply(obj, [10,4]));

// bind можно изменить контекст не вызывая функцию
const func = sum.bind(obj);
console.log('result =', func(5,2));

