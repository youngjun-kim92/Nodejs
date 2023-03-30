const fs=require('fs');
fs.readFile('./mlist.json',(err, data)=>{
    if(err) {
        console.log('파일을 읽어올 수 없습니다.');
    }
    else {
        const json=JSON.parse(data.toString());
        for(let i=0;i<json.length;i++){
            console.log(`이름 : ${json[i].name} 나이 : ${json[i].age}`);
        }
    }
});