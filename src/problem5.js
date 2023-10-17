function problem5(money) {
  var answer;

// money에서 50000보다 큰지 확인하고 크면 50000 빼고 50000쪽에 카운트 1올림
// 남은 것에서 10000보다 큰지 확인하고 크면 50000 빼고 10000쪽에 카운트 1올림
// 반복하여 일원동전까지 하고 각 카운트를 배열로 담아 answer에 대입

  let 오만 = 0;
  let 만 = 0;
  let 오천 = 0;
  let 천 = 0;
  let 오백 = 0;
  let 백 = 0;
  let 오십 = 0;
  let 십 = 0;
  let 일 = 0;
  
while(money>=50000){
  money = money - 50000
  오만++
}
while(money>=10000){
  money = money-10000
  만++
}
while(money>=5000){
  money = money-5000
  오천++
}
while(money>=1000){
  money = money-1000
  천++
}
while(money>=500){
  money = money-500
  오백++
}
while(money>=100){
  money = money-100
  백++
}
while(money>=50){
  money = money-50
  오십++
}
while(money>=10){
  money = money-10
  십++
}
while(money>=1){
  money = money-1
  일++
}
answer=[오만,만,오천,천,오백,백,오십,십,일]





  return answer;
}


module.exports = problem5;
