function problem7(user, friends, visitors) {
  var answer;
  let 친구=[];
  let 함친=[];
  

// friends에서 user와 같은 배열에 있는 user가 아닌 사람을 찾는다(그것이 친구)
// friends에서 그 친구가 user가 아닌 다른 사람과 있는 배열을 찾는다(그것이 함께 아는 친구)
// visitors에서 친구를 제외한 나머지 사람을 찾는다(그것이 방문자)
// 함께 아는 친구가 친구가 같은 배열에 있는 수를 카운트 한다
// ㄴ 그 수 *10 만큼 점수
// visitors에서 방문 횟수(*1) 만큼 점수
// 점수가 많은 순대로 배열
// 점수가 0이면 삭제
// 최대 5명까지(배열의 길이가 4까지)


// 친구 확인 - 배열에서 user가 있는 배열에서 user를 제외하고 남은 배열을 텍스트화하여
//             친구 배열에 push 함
for(var i =0;i<friends.length;i++){
    for(var j=0;j<2;j++){
        if(friends[i][j]==user){
            friends[i].splice(j,1);
            친구.push(friends[i].join(''))
        }
    }
}
// 함께아는 친구 배열로 확인 함께아는 친구가 없거나 user인경우는 삭제
for(var k=0;k<friends.length; k++){
    for(var l =0; l<2;l++){
        for(var m=0;m<친구.length;m++){
        if(friends[k][l]==친구[m]){
            if(친구[m]!=user){
            friends[k].splice(l,1);
                if(friends[k]!=''){
                함친.push(friends[k].join());
                }
            }
        }}
    }
}

// 함께아는 친구가 몇명인지 중복확인

let 횟수 = {};
함친.forEach((a)=>{횟수[a]=(횟수[a]||0)+1;
});

// visitors에서 친구 제외

for(var q=0;q<visitors.length;q++){
    for (var r =0; r<친구.length; r++){
       if (visitors[q] == 친구[r]){
        visitors.splice(q,1);
       } 
    }
}

// visitors가 몇명인지 중복확인

let 횟수2={};
visitors.forEach((a)=>{
    횟수2[a]=(횟수2[a]||0)+1;
})

console.log(횟수);
console.log(횟수2);

console.log(친구);
console.log(함친);








  return answer;
}

module.exports = problem7;
