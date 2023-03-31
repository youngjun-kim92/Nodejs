const studentList=[
    {name:'홍길동',age:50,kor:80,eng:70},
    {name:'김철수',age:22,kor:70,eng:90},
    {name:'이영희',age:22,kor:90,eng:80},
    {name:'박찬호',age:45,kor:60,eng:82},
    {name:'손흥민',age:31,kor:77,eng:86}
];

studentList.sort((beforeStudent, nextStudent) => {                  //배열객체 sort하는 방법
    if(beforeStudent.age>nextStudent.age) return 1;                 //나이순으로 오름차순 정렬
    else if(beforeStudent.age<nextStudent.age) return -1;
    else if(beforeStudent.kor>nextStudent.kor) return -1;           //나이순 오름차순 + 국어점수 내림차순 정렬
    else if(beforeStudent.kor<nextStudent.kor) return 1; 
});
studentList.forEach(student=>{
    console.log(`이름:${student.name}, 나이:${student.age}, 국어:${student.kor}, 영어:${student.eng}`);
});
