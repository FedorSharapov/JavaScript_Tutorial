console.log('\r\n',"-".repeat(20),'\r\nCallBackFunctions:');

// имитируем запрос 
const request = (callBackFunction) =>{
    console.log('request');
    // имитируем задержку ответа
    setTimeout(() => {
        // имитируем ответ
        console.log('response');
        // ответ
        const data = {text:'Hello World'};
        // вызываем функцию обратного вызова
        callBackFunction(data);
    }, 1000);
}

// обработчик
const handler = (data) =>{
    console.log('handler:', data);
}

// запрос с обратным вызовом обработчика handler
request(handler);

// запрос с обратным вызовом обработчика анонимной функции
request((data)=>{
    console.log('anonimHandler',data);
});