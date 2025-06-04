/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// a &&= b;
// console.log(a);


// 논리합(또는) 연산자
let AorB = a||b;
console.log(AorB);

// a||= b;
// console.log(a);


// 부정 연산자
let reverseValue = value;
console.log(reverseValue);


// 조건 처리


// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);

console.clear();

function logIn(){
    let userName = prompt("Who's there?");
    // if(userName === null || userName === undefined) return;
    if(!userName) return;
    if(userName?.toLowerCase() === "admin"){
    let password = prompt("Password?");
        if(password?.toLowerCase() === "themaster"){
            console.log("Welcome!");
        }else if(password === null || password === ''){
            console.log("Canceled");    
        }else{
            console.log("Wrong password"); 
        }
    } else if(userName === null || userName.replace(/\s*/g,'') === ''){
        console.log("Canceled");
    } else{
        console.log("I don't know you");
    }
}

