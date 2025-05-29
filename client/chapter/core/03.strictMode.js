/* ------------------- */
/* Strict Mode         */
/* ------------------- */

'use strict';

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.


// #1
// // 모던 자바스크립트 아닌 버전에서는 변수의 선언을 키워드 없이 작성 가능 - 이는 다양한 오류를 가져오므로 'use strict' 이용 권장
let jujeob = '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);

// #2
// // 모듈 타입에서는 window가 출력되면 안됨
console.log(this);

let self = this;
if(self === window){
    self = undefined;
}