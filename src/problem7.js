function problem7(user, friends, visitors) {
  var answer;

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








  return answer;
}

module.exports = problem7;
