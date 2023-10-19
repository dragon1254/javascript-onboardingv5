function problem6(forms) {
  var answer;

// 닉네임 찾아봄 - forms 배열에서 닉네임쪽 
// 해결 방법
// indexOf와 lastIndexOf 함수를 함께 사용해야 한다.
// indexOf로 문자열에서 특정 문자가 처음 등장하는 index를 구하고, lastIndexOf로 뒤에서 부터 등장하는 index를 구해 일치하지 않으면 중복된 문자가 존재함을 알 수 있다.

// function isUnique(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// 까지 한번 찾아보기
// ㄴ javascript 일부 문자 중복 체크 로 검색 했음


// indexof 등으로 특정 문자가 등장하는 index를 구하여 중복되는 문자가 있는지 확인
// ㄴ 특정 문자는 처음에는 제. forms의 배열에서 이름 부분의 index 순서대로 특정문자를 지정
//   for문 2번 돌려야 할듯. 처음 forms에서 각 크루의 배열 뽑아내는데 1번, 그 배열내에서 연속된 텍스트 찾는데 1번
// ㄴ 없으면 다음 index의 문자로 넘어가는 식
// 그 다음 index값에 해당하는 문자도 마찬가지로 중복되는지 확인
// 중복이 된다면 해당하는 forms의 다음 문자를 찾아서 중복되는지 확인
// ㄴ 찾은 index가 1이라면 substring(1,1+2) index의 다음 문자까지(i,j)하면 i부터 j 전까지 문자열 추출
// 예를들어 0,1,3이 해당된다면 [0,1,3]의 배열 만들고 해당하는 forms의 이메일 부분을 배열로 만들어
// ㄴ [forms[0][0],forms[1][0],forms[3][0]] 과 같이 배열 만들어야 함
// 오름차순 정렬하고 중복 제거
  let answerArray =[];
  let indexArray=[]
  let form = forms;
  let str=''
  for (var i = 0; i<form.length; i++){
      // 신청 이메일이 email.com으로 끝난다는것이라는 제한사항 확인
      if(form[i][0].slice(-9,form[i][0].length) == 'email.com'){
          // 크루의 각 폼에서 이름부분에서 2개씩 잘라 str변수에 넣음
          for(var k=0;k<form.length-2;k++){
          str =form[i][1].substring(k,k+2);
          if(str.length ==2){
          for (var n=0; n<form.length;n++){
              // 크루의 폼이 같을때는 진행x 다를때만 진행
              if(i!=n){
              // 만약 잘라낸 텍스트 str가 잘라낸 텍스트와 같으면 해당 form의 이메일을 array에 넣음
              for(var j=0;j<form.length-2;j++){
              if(str == form[n][1].substring(j,j+2)){
                 indexArray.push(form[n][0]);
              }
              }}
          }}
          }
      }}
  
      answerArray = new Set(indexArray);
      answer =[...answerArray].sort();
    

  return answer;
}
module.exports = problem6;
