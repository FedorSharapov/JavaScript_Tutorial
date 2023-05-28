function RunChangeArray(){
    console.log('\r\n',"-".repeat(20),'\r\nChangeArray:');

    // объединить массивы
    const firstArray = [1,2];
    const secondArray = [3,4];

    let arr = firstArray.concat(secondArray);
    const arr2 = secondArray.concat(firstArray);

    console.log(arr);
    console.log(arr2);

    // добавить элементы массива
    const newArr = arr.concat(5,6,7);
    console.log(newArr);

    // т.к. массив сылочный тип, то с помощью concat можно копировать массив
    const refArray = firstArray;
    console.log(refArray);
    firstArray.push(3);
    console.log(refArray);

    const copiedArr = firstArray.concat();
    firstArray.push(4);
    console.log(copiedArr);

    // объединить в строку
    let str = firstArray.join(' - ');
    console.log(str);

    str = firstArray.join('');
    console.log(str);

    // преобразовать строку в массив
    str = '1, 2, 3, 4, 5, 6';
    arr = str.split(', ');
    console.log(arr);

    arr = str.split();
    console.log(arr);

    const strJS = 'JavaScript';
    arr = strJS.split('');
    console.log(arr);
}