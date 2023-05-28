function RunFindElement(){
    console.log('\r\n',"-".repeat(20),'\r\nExamples:');   

    // пример 1
    // возведение в степень
    function calc(num, exp){
        let res = 1;   
        for(let i =1; i <= exp; i++)
            res *= num;    
        return res;
    }  

    const result = calc(2,10);
    console.log('result',result);  

    // Пример 2
    let age = prompt("Сколько Вам лет?");  

    let welcome = (age < 18) ?
        () => alert('Привет!') :
        () => alert("Здравствуйте!");  
    welcome(); 

    // Пример 3
    const interval = 1000;
    function counter(from, to){
        let number = from; 
        const idInt = setInterval(() => {
            console.log(number);
            if(number == to)
                clearInterval(idInt)
            else
                number++;
        }, interval);
    }  
    counter(10,13);  

    // пример 4
    const calc2 ={
       a: 3,
       b: 4,
       sum(){
           console.log(this.a + this.b);
       },
       mult(){
           console.log(this.a * this.b);
       },
       set(a,b){
           this.a = a;
           this.b = b;
       }
    }; 

    calc2.set(5,3);
    calc2.sum();
    calc2.mult();
}