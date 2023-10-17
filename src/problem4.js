function problem4(word) {
  var answer;

// a부터 z까지 배열1 만들고 순서가 반대로 되는 배열2를 각각 만든다
// 입력 받은 텍스트의 각 알파벳이 배열1의 몇번째가 되는지 확인하고

// 배열2의 번호를 입력하여 출력
// ㄴ 배열1(3) 배열1(4) 배열1(9)이면 배열2(3) 배열2(4) 배열2(9)로 변환하게 하기
// 스페이스 등의 알파벳 외의 문자는 변환하지 않기

 let 알파벳 = Array(26).fill().map((a,i)=> String.fromCharCode(i+97));
 let 청알파벳 = Array(26).fill().map((a,i)=> String.fromCharCode(i+97)).reverse();
 let 대문자 = Array(26).fill().map((a,i)=> String.fromCharCode(i+65));
 let wordArray = Array.from(word)
 let findIndexArray = [];
 let arrayAnswer=[];

 for (var i =0; i<wordArray.length; i++){
    if(i==0){
        findIndexArray.push(대문자.indexOf(wordArray[i]));
    } else{
        findIndexArray.push(알파벳.indexOf(wordArray[i]));
    }
 }
 for (var i =0; i<wordArray.length; i++){
    if(i==0){
        arrayAnswer.push(대문자.reverse()[findIndexArray[i]]);
    } else if(wordArray[i]== ' '){
        arrayAnswer.push(' ');
    } else{
        // 처음에는 그냥 알파벳.reverse()썼는데 안됨 - 생각해보니 매번 바뀌어서 그럼
        arrayAnswer.push(청알파벳[findIndexArray[i]]);
    }}
answer=arrayAnswer.join('');

  return answer;
}

module.exports = problem4;
