import { 
  tiger, 
  delayP, 
  getNode, 
  END_POINT, 
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard
 } from './lib/index.js';

/* 
  1. 태그 template 만들기 
      - `<div></div>`

  2. 태그 렌더링하기
      - insertLast
*/

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

    renderSpinner(userCardInner);
    await delayP(2000);
  try {
    const { data } = await tiger.get(END_POINT);
    
    // getNode(".loadingSpinner").remove();

    gsap.to(".loadingSpinner", {
        opacity: 0,
        duration: 0.2,
        onComplete(){
            getNode('.loadingSpinner').remove();
            data.forEach((user) => renderUserCard(userCardInner,user));
            changeColor('.user-card');

            gsap.from('.user-card', {
                opacity:0,
                stagger:0.1,
                x:-30
            })
        }
    })

  } catch {
        gsap.to(".loadingSpinner", {
        opacity: 0,
        duration: 0.2,
        onComplete(){
            getNode('.loadingSpinner').remove();
            renderEmptyCard(userCardInner);
        }
    })
  }
}

renderUserList();

function handleDelete(e){
    const button = e.target.closet('button');
    if(!button) return;

    const id = button.dataset.value;
    tiger.delete(`${END_POINT}/${id}`)
    console.log(button);
    
}

userCardInner.addEventListener('click', handleDelete)