const str1='<h1>안녕하세요</h1>';
// const result1=str1.replace('<h1>','').replace('</h1>','');
const result1=str1.replace(/<h1>/g,'').replace(/<\/h1>/g,'');           // 정규표현식 : //g <- 모든걸 검색하라는 특수기호
console.log(result1);
const str2='<h1>특별가 - </h1><h2>55,000원</h2>';
const result2=str2.replace(/<..>/g,'').replace(/<...>/g,'');
console.log(result2);                                                   //<..>은 ..은 모든 문자를 뜻하며 개수를 의미 즉, <>안에 들어있는 두글자를 바꾸겠다라는 의미
const str3='<div>특별가 - <h2>55,000원</h2></div>';
// const result3=str3.replace(/<.{0,1}h2>/g,'');                        //.{0,1}은 모든 문자개수가 0개 혹은 1개를 찾아서 바꾸겠다라는 뜻
const result3=str3.replace(/<.{0,4}>/g,'');                             //<.{0,4}>은 <>안에 있는 모든 문자 중 0개부터 4글자 사이의 문자를 전부 바꾸겠다라는 뜻
console.log(result3);  
const str4="/정상가/ - 30000원(특별,할인가 - 23000원)";
const result4=str4.replace(/[\/()\-,]/g,'');                             //[]안에 / () - ,를 찾아서 전부 바꾸기 \는 정규표현식 특수기호 앞에서 쓰임
console.log(result4);
const text='hello my name is gildong';
const matched=text.match(/[a-l]{1,3}/g);                                // a-l사이에서 1~3글자를 추출
console.log(matched);