// 8 ways to get undefined
// 1. variable that is not initialized will give undefined
// 2. function with no return
// 3. perameter that is not passed will be undefined

let first ;
function second(a,b){
    const total = a + b;
}
function third(a,b,c,d){
    const total = a+b+c+d;
    console.log(a,b,c,d);
}
third(2,5);

// const result = second();
// console.log(result);
// console.log(first);