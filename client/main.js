import { diceAnimation, getNode, insertLast, attr } from './lib/index.js';

const [ rollingButton, recordButton, resetButton ] = document.querySelectorAll('.buttonGroup button');
const recordListWrapper = getNode(".recordListWrapper");

const handleRollingDice = (() => {
  let isClicked = false;
  let id;
  return () => {
      if(!isClicked){
    id = setInterval(diceAnimation, 100);
    recordButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearInterval(id);
    recordButton.disabled = false;
    resetButton.disabled = false;
  }
  isClicked = !isClicked;
  };
})()

let count = 0;
let total = 0;

function createItem(diceNumber){
    return `
    <tr>
      <td>${++count}</td>
      <td>${diceNumber}</td>
      <td>${total += diceNumber}</td>
    </tr>
    `
}

function renderRecordItem(){
  const diceNumber = +attr("#cube", 'dice');
  insertLast('tbody', createItem(diceNumber));
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset(){
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);