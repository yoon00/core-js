/* ---------------- */
/* Condition        */
/* ---------------- */

let result = prompt(`자바스크립트의 '공식'이름은 무엇일까요?`);
if (result === 'ECMAScript') {
  console.log('정답입니다.');
} else {
  ('모르셨나요? 정답은 ECMAScript입니다!');
}

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm('너 영화봤어?');

if (didWatchMovie) {
  console.log('재밌더라~');
} else {
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화보러 갈래?');
  if (goingToWatchMovie) {
    let withWho = prompt('누구랑?');
    if (withWho === '너') {
      console.log('좋아');
    }
  } else {
    console.log('싫어');
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 멀티 조건부 연산자 식
const message = didWatchMovie.includes('yes') ? '영화 재밌더라!'
    : goingToWatchMovie === 'yes' ? '언제볼까?'
    : '그래...';
