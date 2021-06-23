function increaseCounter(num) {
  console.log("increaseCounter", num);
  ++num;
  console.log("increaseCounter", num);
  return num;
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

function createBtn(text, action) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.setAttribute("data-action", action);
  return btn;
}

// function createParagraph(text = "") {
//   let para = document.createElement("p");
//   para.innerHTML = text;
//   return para;
// }
function createParagraph(text = "", styleObj = {}) {
  let para = document.createElement("p");
  para.innerHTML = text;
  /* define style for para */
  Object.entries(styleObj).map(([key, value]) => para.style[key] = value);

  return para;
}

function defineMessage(num, min, max) {
  let message;
  if (num < min) {
    message = `Counter can't be less than ${min}. Please increase counter.`;
  } else if (num > max) {
    message = `Counter can't be greater than ${max}. Please decrease counter.`;
  } else {
    message = `Counter ${num} is not a valid number`;
  }
  return message;
}

function defineStyleElem(elem, styleObj) {
  for (let [key, value] of Object.entries(styleObj)) {
    elem.style[key] = value;
  }
}

/* Define layout for counterDiv */

const COUNTER_MIN = 0;
const COUNTER_MAX = "bb";

let counterPara = createParagraph(COUNTER_MIN);

let decreaseBtn = createBtn("-", "decrease");
defineStyleElem(decreaseBtn, {height: "30px", width: "50px"});

let increaseBtn = createBtn("+", "increase");
defineStyleElem(increaseBtn, {height: "30px", width: "50px"});

let containerBtn = document.createElement('div');

let title = createParagraph("Counter");
defineStyleElem(title, {display: "inline", marginLeft: "30px", marginRight: "30px"});

containerBtn.append(decreaseBtn, title, increaseBtn);
defineStyleElem(containerBtn, {marginTop: "30px", marginBottom: "30px"});

let counterMessage = createParagraph();
defineStyleElem(counterMessage, {display: "none", fontSize: "20px", marginTop: "20px"});

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
    setCounterHTML(counterPara, counterHTML);
    defineStyleElem(counterMessage, {display: "none"});
  } else {
    counterMessage.innerHTML = defineMessage(counterHTML, COUNTER_MIN, COUNTER_MAX);
    defineStyleElem(counterMessage, {display: ""});
  }

});

counterDiv.append(containerBtn, counterPara, counterMessage);