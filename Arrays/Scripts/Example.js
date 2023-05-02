{
    console.log('\r\n',"-".repeat(20),'\r\nExample:');

    // пример 1
    const numbers = [23,12,15,46,78,98,56,23,21,21];

    let input = +prompt('Enter a number:');
    const index = numbers.indexOf(input);

    if(index > -1)
        numbers.splice(index,1);
    else
        console.log("Not found.");

    console.log(numbers);

    // пример 2
    const arr=[];

    for(let i = 0; i < 5; i++)
    {
        input = prompt('Enter a number:');
        arr.push(input);
    }

    console.log(arr);

    // Пример 3
    let inputUser = prompt('Enter 5 numbers separated by commas:');
    const userArr = inputUser.split(',');
    const newArray = numbers.concat(userArr);
    console.log(newArray);
}