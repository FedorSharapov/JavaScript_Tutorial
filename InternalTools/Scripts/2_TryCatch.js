function RunTryCatch(){

    try{
        let value = value + 5;      // value is not defined
    }catch(err){
        console.log('err.name', err.name)
        console.log('err.message', err.message)
        console.log('err.stack',err.stack)
    }


    try{
        let error = new Error('Bad request');
        throw error;
    }catch(err){
        console.log('err.name', err.name)
        console.log('err.message', err.message)
        console.log('err.stack',err.stack)
    }

    
    let value = value + 5;      // value is not defined
    console.log('Данное действие не будет выполнено из-за ошибки выше')
}