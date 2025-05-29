/* ------------------ */
/* Global This        */
/* ------------------ */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다. 
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.

//브라우저가 실행되면 global execution environment 생성됨

// 변수 선언과 함수 선언이 코드 실행되기 전에 끌어올려짐 
// => 즉 순서 상관없이 접근 가능
// 단, var = undefined로 할당되나 let, const는 할당안됨 => 오류 발생 //TDZ(TemporalDeadAZone)

//전체가 끌어올려짐
/*sum()

function sum(){
    1+2
}*/

//선언부만 끌어올려짐
/*_sum()
const _sum = function(){
    1+2
}*/