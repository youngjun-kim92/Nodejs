const studentlist=[
    {name:'김철수',kor:80,eng:70,mat:86},
    {name:'이영희',kor:90,eng:80,mat:76},
    {name:'홍길동',kor:60,eng:50,mat:67}
];
let searchName='이영희';
for(const student of studentlist) {
    if(student.name===searchName){
        stu=student;
        break
    }
}
if(stu==undefined){
    console.log('시험명단에 없습니다');
}
else {
    console.log(`${stu.name}님의 성적표`);
    console.log('국어점수=',stu.kor);
    console.log('국어점수=',stu.eng);
    console.log('국어점수=',stu.mat);
}