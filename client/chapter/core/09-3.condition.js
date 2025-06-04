/* ---------------- */
/* Switch           */
/* ---------------- */

const a = 15;

switch(a){
    case 10: console.log("오답"); break;

    case 15: console.log("정답"); break;

    case 20:
    case 25: console.log("오답"); break;

    default: console.log("숫자 입력!");
        
}

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch(thisTime){
    case MORNING: console.log('뉴스 기사 글을 읽는다.'); break;
    case LUNCH: console.log('자주 가는 식당에 가서 식사를 한다.'); break;
    case DINNER: console.log('동네 한바퀴를 조깅한다.'); break;
    case NIGHT:
    case DAWN: console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'); break; 
}
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */
if(thisTime === '아침'){
    console.log('뉴스 기사 글을 읽는다.');
}else if(thisTime === '점심'){
    console.log('자주 가는 식당에 가서 식사를 한다.');
}else if(thisTime === '저녁'){
    console.log('동네 한바퀴를 조깅한다.');
}else if(thisTime === '심야' || thisTime  === '새벽'){
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */
console.clear()

// const value = +prompt('0~6사이의 숫자를 입력해주세요.');
// 함수는 하나의 기능만을 수행하는 것을 목표로 함!(클린코드)
// 함수는 재사용성을 고려해야 합니다. (유연한 함수)
// seperation of concerns (관심사의 분리)

function getRandom(n){
    const value = Math.floor(Math.random() * n);
    return value;
}
function getDay(value){
    switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
    }
}
function weekend(today){
    // if(today.includes('토') || today.includes('일')){
    //     return `오늘은 ${today}요일입니다. 그러므로 주말입니다`;
    // }
    // return`오늘은 ${today}요일입니다. 그러므로 평일입니다`;
    return today.includes('토') || today.includes('일')?
        `오늘은 ${today}요일입니다. 그러므로 주말입니다`:
        `오늘은 ${today}요일입니다. 그러므로 평일입니다`;
}
const day = getDay(getRandom(7));
console.log(day);