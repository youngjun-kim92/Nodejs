const date=new Date();
const dateToTimestamp=date.getTime();
console.log('오늘 날짜의 타임스탬프 : ',dateToTimestamp);
const timestampToDate=new Date(1680247932400);
console.log('오늘은 ',timestampToDate);
const timestampToInit=new Date(1);
console.log('타임스탬프 초기날짜 : ',timestampToInit)