function problem3(number) {
  var answer;
  let k ='';
  let count = 0;

// 입력받은 number를 문자로 계속 더해준다.
// ㄴ 첫 변수를 문자로 한 후 더해주면 문자로 표현됨
// 그러면 1부터 10까지 라면 12345678910 이런식으로 되는데
// 이 전체 숫자중에서 3,6,9가 몇개 있는지 찾아준다
// for of 문법 쓰고 문자 3,6,9를 찾는것이므로 === 가 아닌 ==를 쓴다

  for (var i =1; i<=number;i++){
    k = k+i;
  }
  for(let s of k) {
    if(s==3||s==6||s==9){
      count++;
      answer = count;
    }
  }
  



  return answer;
}

module.exports = problem3;
