const studentlist=[
    {name:'김철수',kor:80,eng:70,mat:86},
    {name:'이영희',kor:90,eng:80,mat:76},
    {name:'홍길동',kor:60,eng:50,mat:67}
];
let searchName='이영희';
let index;
for(index=0;index<studentlist.length;index++){
    if(studentlist[index].name===searchName){
        break;
    }
}
if(index==studentlist.length){
    console.log('시험명단에 없습니다');
}
else {
    console.log(`${studentlist[index].name}님의 성적표`);
    console.log('국어점수=',studentlist[index].kor);
    console.log('국어점수=',studentlist[index].eng);
    console.log('국어점수=',studentlist[index].mat);
}