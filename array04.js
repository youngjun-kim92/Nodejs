const studentList=[
    {name:'홍길동',age:50,kor:80,eng:70},
    {name:'김철수',age:22,kor:70,eng:90},
    {name:'이영희',age:22,kor:90,eng:80},
    {name:'박찬호',age:45,kor:60,eng:82},
    {name:'손흥민',age:31,kor:77,eng:86}
];

const names=['이영희','김철수','홍길동','손흥민','박철순'];
const sliced=names.slice(1,3);                              //배열 잘라서 각자 방에 넣기
console.log(sliced);

studentList.sort((before,next) => next.eng-before.eng);     //상위 3명만 뽑아서 정렬하기
const engList=studentList.slice(0,3);
console.log('** 영어 경시대회 참여자 명단 **');
engList.forEach(student=>{
    console.log(`이름:${student.name}, 영어:${student.eng}`);
});