function increaseCounter(num) {
  return ++num;
}

function increaseCounterHTML(elem, num) {
  return increaseCounter(getCounterHTML(elem));
}

function decreaseCounter(num) {
  return --num;
}

function isValidCounter(num, min, max) {
  return num >= min && num <= max;
}

function getCounterHTML(elem) {
  return elem.innerHTML;
}

function setCounterHTML(elem, num) {
  elem.innerHTML = num;
}

function createBtn(text, action, styleObj) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.setAttribute("data-action", action);
  btn.style.height = styleObj.height;
  btn.style.width = styleObj.width;
  return btn;
}

function createParagraph(text) {
  let para = document.createElement("p");
  para.innerHTML = text;
  return para;
}

/* Define layout */

const COUNTER_MIN = 0;
const COUNTER_MAX = 10;

let counterPara = createParagraph(COUNTER_MIN);
let increaseBtn = createBtn("+", "increase", {height: "30px", width: "30px"});
let decreaseBtn = createBtn("-", "decrease", {height: "30px", width: "30px"});

/* took from html */
counterDiv.append(counterPara, decreaseBtn, increaseBtn);
counterDiv.addEventListener("click", (event) => {

  let action = event.target.dataset.action;
  let counterHTML = getCounterHTML(counterPara);
  
  switch(action) {
    case "decrease":
      counterHTML = decreaseCounter(counterHTML);
      break;
    case "increase":
      counterHTML = increaseCounter(counterHTML);
      break;
  }

  if (isValidCounter(counterHTML, COUNTER_MIN, COUNTER_MAX)) {
    setCounterHTML(counterPara, counterHTML);
  } else {
    /* stampa messaggio */
     return false;
  }

});

