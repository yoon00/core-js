import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

// callback

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = 0;
//       second.style.top = 0;
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

// 내가 이거 끝나면 꼭 너한테 알려줄게 약속할게...


// promise





// function delayP(shouldRejected = false, timeout = 1000){

//   return new Promise((resolve,reject) => {

//     setTimeout(() => {
      
//     if(!shouldRejected){
//       resolve('성공');
//     }else{
//       reject({message: '오류 발생!'});
//     }
//     }, timeout);
//   })
// }

// console.log( delayP() );


// delayP() // [[promise object]]
// .then(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   return delayP();
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   second.style.transform = 'rotate(-360deg)';

//   return delayP();
// })
// .then(()=>{
//   first.style.top = 0;
//   second.style.top = 0;
// })

const defaultOptions = {
  shouldRejected:  false,
  data: '성공!',
  errorMessage: "알 수 없는 오류!",
  timeout: 1000
}


function delayP(options){

  let config = {...defaultOptions}
  if(isNumber(options)){
    config.timeout = options;
  }
  
  if(isObject(options)){
    config = {...defaultOptions, ...options}
  }

  const {shouldRejected, timeout, errorMessage:err, data} = config;

  return new Promise((resolve,reject) => {

    setTimeout(() => {
      
    if(!shouldRejected){
      resolve(data);
    }else{
      reject({messsage: err});
    }
    }, timeout);
  })
}


delayP({
  data: '성공!',
  shouldRejected:  false,
  timeout: 1000,
  errorMessage: "오류발생!"
})




delayP() // [[promise object]]
.then(() => {
  first.style.top = '-100px';
  second.style.top = '100px';

  return delayP();
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.transform = 'rotate(-360deg)';

  return delayP();
})
.then(()=>{a
  first.style.top = 0;
  second.style.top = 0;
})