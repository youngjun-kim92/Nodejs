/* function hello() {
    console.log('안녕하세요');
} */

/* const hello=function () {
    console.log('안녕하세요');
} */

const hello=() => {
    console.log('안녕하세요');          /* 3개의 함수가 다 동일함 */
}

hello();

/*function sum(a,b) {
    return a+b;
}*/

const sum=(a,b) => a+b;

let result=sum(10,20);
console.log(result);

const sumAndPrint=(num1, num2) => {
    const result=num1+num2;
    return `두 수의 합은 ${result}입니다.`;
}

console.log(sumAndPrint(45,30));