let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c);

// ... another code

a = 8;
b = 12;

console.log(c);


function sum(a, b){
    let c = a + b;
    console.log(c);
}

let d = 1;
let f = 3;
sum(3, 10);
sum(d, f);

function sum2(a, b){
    let c = a + b;
    return c;
}

//console.log(sum2(3, 10));

let num1 = 1;
let num2 = sum2(3, 10);

console.log(num1 + num2);
console.log(num1 + sum2(3, 10));

function someNamedFunction(a, b){
    let c = a + b;
    return c;
}

function a (a, b){
    let c = a + b;
    return c;
}

const anonimFunc = function (a, b){
    let c = a + b;
    return c;
}

console.log(anonimFunc(1, 2))

const arrowFunc = (a, b) => {
    let c = a + b;
    return c;
}
console.log(arrowFunc(1, 2))


const funcWithDefaultValue = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultValue(2, 5))
console.log(funcWithDefaultValue(2))

const e = 4;

const playWithReturnFunc = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i === 9){
            return i;
        }
    }
}

playWithReturnFunc()


console.log(Date())

const myRequestWithDate = (filed1, addedAt = Date()) => {
    
    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = filed1;
    requestBody.someData2 = filed1;
    requestBody.timestamp = addedAt;

    return requestBody;
}

console.log(myRequestWithDate('qweqwe'))
console.log(myRequestWithDate('qweqwe', 'qweqwe2'))



let requestBody = {
    someData: 1,
    someData2: 2,
    timestamp: ''
}

let a1 = 1;
let a3 = 2;

requestBody.someData = a1;
requestBody.timestamp = a3;

console.log(requestBody)



console.log(1)

function someFunc(){
    console.log('2')
}

setTimeout(someFunc, 2000)

console.log(3)




function first(){
    setTimeout(function(){
        console.log('first')
    }, 3000)
}

function second(){
    console.log('Second');
}

first();
second();



function someFuncWithCallbeck(param1, callbackFunc){
    console.log(`Here is my param1 ` + param1);
    callbackFunc();
}

someFuncWithCallbeck('qweqwe', function(){ console.log('Here is log from callback func')})

function it(testDescription, testActions){
    console.log(`test descr: ${testDescription}`)
    testActions();
}


it('Search google', () => {
    
})





sum22(1, 2);


function sum22(a, b){
    let c = a + b;
    console.log(c);
}


const sum333 = (a, b) => {
    let c = a + b;
    console.log(c);
}

sum333(1, 2)
