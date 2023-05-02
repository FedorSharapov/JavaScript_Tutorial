
console.log('\r\n',"-".repeat(20),'\r\nCycles:');


// цикл с предусловием
let sum = 0; let num = 1;
while(num <= 100){
    sum = sum + num;
    num++;
}
console.log(sum);

// цикл с пост условием
num = 0;
do{
    num++;
} while(num < 0);

console.log(num);

// цикл с счетчиком
const fact = 170;
let result = 1;
for(let i = 1; i <= fact; i++)
{
    result *= i;
}
console.log(result);

// прерывание циклов с помощью break
let cnt = 0;
result = 0;
for(let i = 1; i <= 1000; i++)
{
    if(i % 7 === 0)
        cnt++;

    if(cnt === 15)
    {
        result = i;
        break;
    }
}
console.log(result);

cnt = 0;
while(true)
{
    cnt++;

    if(cnt == 1000)
        break;
}

console.log(cnt);