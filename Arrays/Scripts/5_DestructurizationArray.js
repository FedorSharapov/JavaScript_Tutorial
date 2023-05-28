function RunDestructurizationArray(){
    console.log('\r\n',"-".repeat(20),'\r\nDestructurizationArray:');

    // массив
    let nums = [5,1,3,9];

    // деструктуризация массива. Важен порядок.
    // Можно пропускать элементы массива через запятую
    // Можно указть значение по-умолчанию, если такого элемента нет
    let[a,,b,,c=20] = nums;
    console.log(a,b,c);

    // Можно записать оставшиея в отдельную переменную
    let[d,k, ...rest] = nums;
    console.log(d,k);
    console.log(rest);

   // деструктуризация массива строк
   let userFullName = 'Fedor Sharapov';
   let[firstName,secondName] = userFullName.split(' ');
   console.log(firstName);
   console.log(secondName);
}