const students=[
    {name:'김철수',score:90},
    {name:'이영희',score:72},
    {name:'홍길동',score:83}
];
// 등급을 구하는 화살표함수
const getDegree=(score) => {
    let degree;
    if(score>=90) {
        degree='A';
    }
    else if(score>=80) {
        degree='B';
    }
    else if(score>=70) {
        degree='C';
    }
    else if(score>=60) {
        degree='D';
    }
    else {
        degree='F';
    }
    return degree;
}
students.forEach(stu=>console.log(`이름 : ${stu.name}, 등급 : ${getDegree(stu.score)}`));
