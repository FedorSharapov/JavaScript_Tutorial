console.log('\r\n',"-".repeat(20),'\r\nFunctionClosures:');

// замыкание функции
const count = (function () {
    let counter = 0;
    return () => ++counter
})();
 
count();
count();
count();
var resultCounter = count();
console.log('resultCounter = ',resultCounter);

// замыкание функции
function countNamed(){
   let counter = 0;
   return function(){
       counter++;
       console.log(counter);
   }
}

const countN = countNamed();
countN();
countN();
countN();
