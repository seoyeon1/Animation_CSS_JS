// getElementsByClassName(className) : 동일한 class이름을 가진 요소들을 모두 담은 배열(HTMLCollection)을 반환
const contents = document.getElementsByClassName('contents-wrapper');

// for문이 돌면서 0번째 요소만 class이름이 blue로 바뀜
// : HTMLCollection은 실시간으로 (요소에 변화된 내용만) 반영,0번째를 blue로 바꾼 뒤 또다른 반복을 하려고 하면 1<1이 돼버려서 적용X 
// for (let i = 0; i < contents.length; i++) {
//   contents[i].className = 'blue';
// }

//sol_1) 배열을 역순으로 순회

for (let i = contents.length - 1; i >= 0; i--) {
  contents[i].className = 'blue';
}

//sol_2) HTMLCollection 일반 배열로 바꿔 실시간 전환 방지

const contentsArray = Array.from(contents);
// const contentsArray = [...contents]; 전개 연산자도 가능
for (let i = 0; i < contentsArray.length; i++) {
  contentsArray[i].className = 'blue';
}

//getElementsByTagName(tagName):tag이름으로 해당하는 요소 모두 선택

const keywords = [...document.getElementsByTagName('strong')];
//<strong>에 해당하는 요소의 배경을 파란색으로 
for (let i = 0; i < keywords.length; i++) {
  keywords[i].className = 'blue';
}
