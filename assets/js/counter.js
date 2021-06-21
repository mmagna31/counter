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


function defineMessage(num, min, max) {
  let message;
  if (num < min) {
    message = `Counter can't be less than ${COUNTER_MIN}. Please increase counter.`;
  } else if (num > max) {
    message = `Counter can't be greater than ${COUNTER_MAX}. Please decrease counter.`;
  } else {
    message = `Counter ${counterHTML} is not a valid number`;
  }
  return message;
}

/* Define layout */

const COUNTER_MIN = 0;
const COUNTER_MAX = 10;

let counterPara = createParagraph(COUNTER_MIN);
let increaseBtn = createBtn("+", "increase", {height: "30px", width: "30px"});
let decreaseBtn = createBtn("-", "decrease", {height: "30px", width: "30px"});
let counterMessage = createParagraph("");
counterMessage.hidden = true;

/* took from html */
counterDiv.append(counterPara, decreaseBtn, increaseBtn, counterMessage);
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
    if (!counterMessage.hidden) {
      counterMessage.hidden = true;
    }
    setCounterHTML(counterPara, counterHTML);
  } else {
    counterMessage.innerHTML = defineMessage(counterHTML, COUNTER_MIN, COUNTER_MAX);
    counterMessage.hidden = false;
  }

});

