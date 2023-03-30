const userList=[
    {name:'홍길동', age:50, address:'서울시 종로구'},
    {name:'김철수', age:25, address:'서울시 중구'},
    {name:'이영희', age:22, address:'서울시 '}
];
const fs=require('fs');
fs.writeFile('./mlist.json',JSON.stringify(userList),function (error) {
    console.log('저장완료!!');
});