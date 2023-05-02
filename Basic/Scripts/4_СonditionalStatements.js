// условный оператор if else
if(userName == null)
    console.error('Error firsName is null!');
else if(userName.length == 0)
    console.warn('Name is empty.');
else
    console.log(`Hellow ${userName}!`);
    
// тернарный оператор
let comingOfAge = isAdult? 'adult' : 'young'
console.log(`${userName} is ${comingOfAge}.`);

// оператор switch
// использует строгое сравнение без приведения типов
const browser = "Chrome";
switch(browser)
{
    case 'Edge':
        console.log(`browser is Edge`);
    break;

    case 'Firefox':
        console.log(`browser is Firefox`);
    break;

    case 'Chrome':
        console.log(`browser is Chrome`);
    break;

    default:
        console.log(`browser is unknown`);
        break;
}

const city = 'Moscow';
let cost;
switch(city)
{
    case 'Moscow':
        cost = 5000;
        console.log(`Cost is ${cost}.`);
    break;

    case 'Kazan':
    case 'Saint-Petersburg':
        cost = 4000;
        console.log(`Cost is ${cost}.`);
    break;

    default:
        cost = 3000;
        console.log(`Cost is ${cost}.`);
        break;
}