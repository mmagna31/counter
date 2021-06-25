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

function createBtn(text, action) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.setAttribute("data-action", action);
  return btn;
}

function createParagraph(text = "") {
  let para = document.createElement("p");
  para.innerHTML = text;
  return para;
}

function defineMessageUser(num, min, max) {
  /* TO DO: improve or redefine function */
  let message;

  if (isNaN(num) || isNaN(min) || isNaN(max)) {
    message = "Unable to perform action. Please check counter values.";
  } else if (num < min) {
    message = `Super! You've got the minimum counter ${min}.`;
  } else if (num > max) {
    message = `Super! You've got the maximum counter ${max}.`;
  } else {
    message = `Counter ok.`;
  }
  return message;
}


function defineStyleElem(elem, styleObj) {
  /* It takes an object with the dom style properties and assigns them to the element */
  for (let [key, value] of Object.entries(styleObj)) {
    elem.style[key] = value;
  }
}
