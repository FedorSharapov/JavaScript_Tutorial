console.log('\r\n',"-".repeat(20),'\r\nPromise:');

const requestPromise = new Promise((resolve, reject) => {
    // имитируем запрос 
    console.log('request');

    // имитируем задержку
    setTimeout(() => {
        console.log('response');

        // имитируем ответ    
        const statusMsg = Math.random() > 0.5? 200 : 404;     // случайный cтатус ответа
        let response = {status: statusMsg};
        if (response.status == 200)
            resolve(response.status);  // обратный вызов в случае успеха
        else 
            reject(response.status);   // обратный вызов в случае ошибки
    }, 1500);
});

requestPromise.then(
    (status)=>{
        console.log('resolve:',status);
    },
    (status)=>{
        console.log('reject', status);
});