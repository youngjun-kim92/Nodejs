function plus(num1, num2) {
    return num1+num2;
}

let p=plus;
console.log('두 수의 합=',p(10,30));
const plus=(num1,num2) => num1+num2;
const minus=(num1,num2) => num1-num2;
function calc(num1,num2,func) {
    return func(num1,num2);
}
console.log('두 수의 합=',calc(30,50,plus));
console.log('두 수의 차=',calc(70,10,minus));