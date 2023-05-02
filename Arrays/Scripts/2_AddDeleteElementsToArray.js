{
    console.log('\r\n',"-".repeat(20),'\r\nAddDeleteElementsToArray:');

    // массив
    const nums = [10,20];
    console.log(nums);

    // добавить в начало массива
    nums.unshift(0);
    console.log(nums);

    // добавить в конец массива
    nums.push(30);
    console.log(nums);

    // добавить в конкретную позицию
    nums[5] = 50;
    console.log(nums);
    console.log(nums[4]);

    // удалить элемент массива.
    // после удаления по данному индексу будет undefined
    delete nums[1];
    console.log(nums);

    // удалить элемент массива с перестроением элементов массива
    nums.splice(1,1);
    nums.splice(3,1);
    console.log(nums);

    // извлечь первый элемент массива  с удалением его из массива.
    let element = nums.shift();
    console.log('element =',element);
    console.log(nums);

    // извлечь последнее значение массива с удалением его из массива.
    element = nums.pop();
    console.log('element =',element);
    console.log(nums);
}