function RunAsynchronousFunctions(){
console.log('\r\n',"-".repeat(20),'\r\nAsynchronousFunctions:');

// setTimeout вызывает функцию один раз через указанное время в мс
// установить timeout
setTimeout(() => {
    console.log('timeout 1000')
}, 1000);

function log(str){
    console.log(str);
}
// параметры функции log указываются после задержки
const idT = setTimeout(log, 3000,'timeout 3000');
// удалить timeout
clearTimeout(idT);

// setInterval вызывает функцию через равные промежутки времени
// установить interval
const idI = setInterval(log, 1000, 'interval');
setTimeout(() => {
    // удалить интервал
    clearInterval(idI);
}, 2000);
}