/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, ...args) => {
    const arr = [...args];
    const first = arr[0]; //arr[0] === a
    // 화살표 함수: arguments X
    // console.log(arguments);
    // console.log(args);
    let total = 0;
    // for(const value of args){
    //     total += value;
    // }
    //forEach
    // args.forEach((item, index) => total += item);
    return args.reduce((acc, cur) => acc + cur, 0);
    
};

console.log(calcAllMoney(1000,3000, 5000,2500));
// 화살표 함수와 this
//일반 함수는 나를 호출한 대상을 기준으로 this를 바인딩합니다.
function a(){
    console.log(this);
}
window.a();
//화살표 함수는 this를 바인딩하지 않는다. 상위 컨텍스트에서 가져옵니다.
const b = () => {
    console.log(this);
}
//b();
//자바스크립트의 함수는 양면의 얼굴
//1. 일반 함수(normal function)
//2. 생성자 함수(constructor function) - 함수 선언문,표현식으로 만든 함수 new하면 모두 가능/객체 return
// 대문자 => 생성자 함수
function Button(text = 'empty'){
    this.text = text
}
const btn = new Button();

class Button_ {

}
const _btn = new Button_();
const arrow = () => {

}
//new arrow()
//일반함수
//constructor 내장(concise method 예외)
//this : 나를 호출한 대상 this
//객체의 메서드로 많이 사용됨 => this를 찾기 위해

//화살표 함수
//constructor 비내장(성능 최적화) <- -> class
//this: 바인딩하지 않음 => 상위 컨텍스트에서 찾음
//메서드 안에서의 함수 => 상이 컨텍스트에서 가져와야함
console.clear()
const user = {
    name: '박수진',
    total: 0,
    grades: [50, 70, 40],
    totalGrades(){
        // this.grades.forEach(function(g){
        //     console.log(this);
        //     //this.total += g;
        // })((
        this.grades.forEach(g => this.total += g)
        this.grades.forEach(function(g){
            this.total += getComputedStyle;
        }, this)
        this.total = this.grades.reduce((acc,cur) => acc+cur, 0)
    console.log(this.total);
    }
}
//user.sayHi();
// user.sayHi2();
// user.sayHi3();
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
    let total = 1;
    for(let i = 0; i < powerCount; i++){
        total *= numeric;
    }
    return total;
}; 
let _pow = (numeric, powerCount) => Array(powerCount).fill(numeric).reduce((acc, cur) => acc * cur, 1)
// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
    let result = '';
    for(let i = 0; i< repeatCount; i++){
        result += text;
    }
    return result;
}; 
let _repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '')