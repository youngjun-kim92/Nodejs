const studentList=[
    {name:'홍길동',age:50,kor:80,eng:70},
    {name:'김철수',age:22,kor:70,eng:90},
    {name:'이영희',age:22,kor:90,eng:80},
    {name:'박찬호',age:45,kor:60,eng:82},
    {name:'손흥민',age:31,kor:77,eng:86}
];

studentList.sort((before, next) => before.age - next.age);          //하나를 주제로만 오름차순 정렬하고 싶을 때는 이렇게

studentList.forEach(student=>{
    console.log(`이름:${student.name}, 나이:${student.age}, 국어:${student.kor}, 영어:${student.eng}`);
});