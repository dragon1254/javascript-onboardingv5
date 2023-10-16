
// 이 모든 것은 function problem1 안에서 이루어져야 함

// 책을 임의로 펼친 결과를 가져옴 - pobi, crong array를 가져옴

// 먼저 예외사항부터 체크
// 예외사항일때는 answer에 -1 넣고 return
// ㄴpobi,crong 어레이는 연속된 수가 아닐때 
// ㄴ or 어레이의 수가 1보다작거나 400보다 크면 예외사항
// ㄴ or 각 어레이의 길이가 2보다 클때

// 포비의 왼쪽페이지 값(pobi[0])을 string으로 바꿔주고 각 자리 숫자를 더해줌
// ㄴ 각 자리 숫자는 반복문으로 문자.length를 사용하여 왼합에 넣고
// - parseInt(0번째) + parseInt(1번쨰)+..
// ㄴ 마찬가지로 왼곱에 넣음. 곱이라 시작 변수를 1로 만듦
// 마찬가지로 하여 오합호곱 비교하여 만들고
// [왼합,왼곱,오합,오곱]에서 가장 큰 수를 큰수1에 넣음

// crong의 경우도 마찬가지로 하여 가장 큰 수를 큰수2에 넣음
// 큰수1과 큰수2를 비교하여 결과값을 answer에 넣음
// ㄴ큰수1이 이기면 1을 리턴, 큰수2가 이기면 2가 리턴, 같으면 0 리턴




function problem1(pobi, crong) {
  let 왼합1 = 0;
  let 왼곱1 = 1;
  let 오합1 = 0;
  let 오곱1 = 1;
  let 왼합2 = 0;
  let 왼곱2 = 1;
  let 오합2 = 0;
  let 오곱2 = 1;
  let 큰수1 = 0;
  let 큰수2 = 0;
  var answer;

  
  
  let po1 = String(pobi[0])
  for(var i =0;i<po1.length;i++){
    왼합1 = 왼합1 + parseInt(po1[i]);
    왼곱1 = 왼곱1 * parseInt(po1[i]);
  }
  let po2 = String(pobi[1])
  for(var i =0;i<po2.length;i++){
    오합1 = 오합1 + parseInt(po2[i]);
    오곱1 = 오곱1 * parseInt(po2[i]);
  }
    큰수1 = Math.max(왼합1, 왼곱1, 오합1, 오곱1);


    let cr1 = String(crong[0])
    for(var i =0;i<cr1.length;i++){
      왼합2 = 왼합2 + parseInt(cr1[i]);
      왼곱2 = 왼곱2 * parseInt(cr1[i]);
    }
    let cr2 = String(crong[1])
    for(var i =0;i<cr2.length;i++){
      오합2 = 오합2 + parseInt(cr2[i]);
      오곱2 = 오곱2 * parseInt(cr2[i]);
    }
    큰수2 = Math.max(왼합2, 왼곱2, 오합2, 오곱2);

  if(큰수1>큰수2){
    answer = 1
  } else if (큰수1<큰수2){
    answer = 2
  } else if (큰수1 == 큰수2){
    answer = 0
  }
  if(pobi.length>2 || crong.length>2|| pobi[0]<1 || pobi[1]>400 || crong[0]<1||crong[1]>400){
    answer = -1
  }
  for(var i =0; i<pobi.length-1;i++){
    if(pobi[i]+1 != pobi[i+1]){
      answer = -1}
  }
  for(var i =0; i<crong.length-1;i++){
    if(crong[i]+1 != crong[i+1]){
      answer = -1}
  }
    
  
  return answer;
}

module.exports = problem1;
