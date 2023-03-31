/* function dice () {
    return Math.floor(Math.random()*6)+1;
} */

const dice= () => Math.floor(Math.random()*6)+1;
console.log('주사위 값=',dice());
const makeRandom= (start,end) => Math.floor(Math.random()*(end-start))+start;
console.log('구간 난수 구하기(30~40) ->',makeRandom(30,40));