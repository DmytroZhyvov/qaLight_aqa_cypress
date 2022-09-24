//async functions return promises
async function asyncFunction1(){
    return 'text from async function'
}

console.log(asyncFunction1());



const syncFunc = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('text from async function')
            resolve()
        }, 3000)
    })
}

const asyncFunction = async () => {
    console.log('Start');
    await syncFunc();
    console.log('End')
}

asyncFunction();