const getdate=(date)=> {
    const newdate=new Date(date);
    const yyyy=newdate.getFullYear();
    const mm=newdate.getMonth()<9?`0${newdate.getMonth()+1}`:newdate.getMonth()+1;
    const dd=newdate.getDate()<10?`0${newdate.getDate()}`:newdate.getDate();
    return `${yyyy}-${mm}-${dd}`;
}

let day=100;
const date=new Date();
const dateTimestamp=date.getTime();
let dday=getdate(dateTimestamp+(day*24*60*60*1000));
console.log('%d일 기념일 ☞ %s',day,dday);