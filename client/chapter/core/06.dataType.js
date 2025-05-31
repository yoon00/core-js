/* ------------------------ */
/* Data Types               */
/* ------------------------ */

// 표현식, 연산자 => 값 반환 o / 문 => 값 반환 x
/*
원시값
1. 숫자형(number) -> 123456 (가장 안전한 정수 2^53-1까지)
2. bingInt -> 123n
3. 문자형(string) -> `hello ${1+2}`
4. 불린형(boolean) -> true/false
5. null-> 값을 임의로 비움
6. undefined -> 존재x
8. 심볼(symbol) -> Symbol('uuid')

7. 객체(object) -> const a = {}
<- 배열(array), 함수(function)은 객체에 포함되어있음
*/

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(empty);
// 2. 값이 할당되지 않은 상태
let nothing;
console.log(nothing);
console.log(typeof nothing);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let hi = "안녕";
`hello${hi}`;
console.log(typeof hi);

console.clear();

const single = 'hello'; // string literal
const str = new String('hello'); // 문자 생성자 함수(string constructor function)
console.log(single);
console.log(str);


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 10;
console.log(typeof integer);

const num = new Number(20); // number의 constructor function
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let longnum = 10000n;
console.log(typeof longnum);
// 6. 참(true, yes) 또는 거짓(false, no)
let is = true;
console.log(typeof is);

const bool = new Boolean(false);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const course = {
    1: "javascript",
    2: "react"
}
const obj = {};
const newObj = new Object({});
console.log(typeof(course));
console.log(typeof(obj));
console.log(typeof(course));
// 8. 고유한 식별자(unique identifier)
const uuid1 = Symbol("uuid");
const uuid2 = Symbol("uuid");
console.log(uuid1 === uuid2);

//object(전역객체) => string, number, boolean, array, function, object
//call() 이용하면 빌려쓰기 가능
//prototype => 조상
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
//this: 나를 호출한 대상
//화살표 함수: this를 바인딩하지 않음(상위 컨텍스트에서 this를 찾음)
//console.dir하면 concise, arrow property 없음: 가벼움

const _obj = {
    name: 'tiger',
    age: 30,
    //normal function method
    sayHi: function(){
        console.log(this.name);
    },
    //arrow function method
    sayHi2:() => {
        console.log(this.name);
    },
    //concise method => 객체에 method를 정의할 때 제일 많이 씀
    sayHi3(){
        console.log(this);
    }
}

//property => key, value 쌍
//객체의 key 값은 문자열
_obj.name
_obj['name']
_obj.sayHi();
_obj.sayHi2();


// Array
const arr = ['a', 100, {name:'tiger'}, ['a', 'b'],  true, ()=>{}];
//const _arr = new Array([]);

// function
function a(){
    console.log("a함수")
}

a();

function 붕어빵틀(재료){
    return `${재료} 붕어빵!`;
}
const 슈붕 = 붕어빵틀('슈크림');
const 팥붕 = 붕어빵틀('팥');

const f = new Function('aa');
// this