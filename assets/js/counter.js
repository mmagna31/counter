function increaseCounter(num) {
  return ++num;
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

function createBtn(text, action, {width, height} = {}) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.setAttribute("data-action", action);
  btn.style.height = height;
  btn.style.width = width;
  return btn;
}

function createParagraph(text = "") {
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
let decreaseBtn = createBtn("-", "decrease", {height: "30px", width: "50px"});
let increaseBtn = createBtn("+", "increase", {height: "30px", width: "50px"});
let containerBtn = document.createElement('div');
let title = createParagraph("Counter");
title.style.display = "inline";
title.style.marginLeft = "30px";
title.style.marginRight = "30px";


containerBtn.append(decreaseBtn, title, increaseBtn);
containerBtn.style.marginTop = "30px";
containerBtn.style.marginBottom = "30px";


let counterMessage = createParagraph();
counterMessage.hidden = true;
counterMessage.style.fontSize = "20px";
counterMessage.style.marginTop = "20px";

counterDiv.append(containerBtn, counterPara, counterMessage);

/* took from html */

containerBtn.addEventListener("click", (event) => {

  let action = event.target.dataset.action;
  let counterHTML = getCounterHTML(counterPara);
  
  switch(action) {
    case "decrease":
      counterHTML = decreaseCounter(counterHTML);
      break;
    case "increase":
      counterHTML = increaseCounter(counterHTML);
      break;
    default:
      return false;
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

