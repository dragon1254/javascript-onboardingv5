function problem2(cryptogram) {
  let 문자열 = String(cryptogram);
  let 길이 = 문자열.length;
  var answer;

// 매개변수의 각 글자를 비교하여 같으면 둘다 없애기
// cryptogram[0]==cryptogram[1]이면 
// 두항을 삭제하고 새로운 문자열 만들기
// 반복하여 연속하는 중복 문자가 더 없으면 그 결과 값을 answer에 부여 하여 return 하기;
// ㄴ 반복하는 회수는 cryptogram의 글자 길이 만큼

for(var i = 0; i<길이;i++){
    if(문자열[i] == 문자열[i+1]){
       문자열 = 문자열.slice(0,i) + 문자열.slice(i+2);
       answer = 문자열;
       for(var i = 0; i<길이;i++){
           if(문자열[i] == 문자열[i+1]){
              문자열 = 문자열.slice(0,i) + 문자열.slice(i+2);
              answer = 문자열;
             for(var i = 0; i<길이;i++){
                if(문자열[i] == 문자열[i+1]){
                문자열 = 문자열.slice(0,i) + 문자열.slice(i+2);
                answer = 문자열;
                for(var i = 0; i<길이;i++){
                  if(문자열[i] == 문자열[i+1]){
                    문자열 = 문자열.slice(0,i) + 문자열.slice(i+2);
                    answer = 문자열;
                    for(var i = 0; i<길이;i++){
                  if(문자열[i] == 문자열[i+1]){
                    문자열 = 문자열.slice(0,i) + 문자열.slice(i+2);
                    answer = 문자열;
                  }}
                  }}}
       
    }
    }  
    }  
    }
}



  return answer;
}

module.exports = problem2;
