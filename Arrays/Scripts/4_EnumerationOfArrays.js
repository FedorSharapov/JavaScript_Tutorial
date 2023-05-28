function RunEnumerationOfArrays(){
    console.log('\r\n',"-".repeat(20),'\r\nEnumerationOfArrays:');

    // массив
    let nums = [20,40,30,10];

    // перебор с помощью цикла for
    for(let i = 0; i <nums.length; i++){
        console.log(nums[i]);
    }

    // перебор с помощью цикла forEach
    let sum = 0;
    nums.forEach(function(element){
        sum+=element;
    });
    console.log('sum =',sum);

    nums.forEach(function(element,index){
        console.log(index,element);
    });

    // преобразовать элементы массива
    nums = nums.map(function(element){
        let mod = element + 5;
        return mod;
    });

    console.log(nums);

    // найти первое вхождение в массиве. Undefined если не найден.
    let match = nums.find(function(element){
         return element > 20;
    });

    console.log(match);

    // найти все вхождения в массиве. пустой массив если не найден.
    let filtered = nums.filter(function(element){
        return element > 20;
    });
   
    console.log(filtered);
   
    // сортировка массива
    nums = nums.sort(function(a,b){
        return a-b;
    });
   
    console.log(nums);
}