function RunCreateArray(){
    console.log('\r\n',"-".repeat(20),'\r\nCreateArray:');

    // массив ссылочный тип!

    // пустой массив
    const arr = [];

    // создание массива с элементами
    const nums = [2, 3, 1, 2, 3];
    const greets = ['hello', 'world'];

    // длина массива
    const lengthArray = nums.length;    // 5
    console.log('lengthArray =', lengthArray);

    // получение значения из массива
    const elementArray = nums[3];       // 2
    console.log('elementArray =', elementArray);

    // получение несуществующего значения      
    console.log('nums[20] =', nums[20]);  // undefined

    // перезапись элемента массива
    nums[2] = 54; 
    console.log('nums[2] =', nums[2]);

    // поиск индекса элемента массива строго по типу данных, -1 если не найден
    const index = nums.indexOf(54);
    const index2 = greets.indexOf('hello');
    console.log('index =', index);
}