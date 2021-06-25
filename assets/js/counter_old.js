/*
  Counter Layout: Initialize the counter and create buttons to play with the counter.
  This layout uses the counterDiv element set in the html file. 
*/

/* Counter min and max limits*/
const COUNTER_MIN = 0;
const COUNTER_MAX = 10;

/* Inizialize the counter */
let counterPara = createParagraph(COUNTER_MIN);

/* Define +/- buttons with custom attribute for behaviour pattern */
let decreaseBtn = createBtn("-", "decrease");
defineStyleElem(decreaseBtn, {height: "30px", width: "50px"});

let increaseBtn = createBtn("+", "increase");
defineStyleElem(increaseBtn, {height: "30px", width: "50px"});

let title = createParagraph("Counter");
defineStyleElem(title, {display: "inline", marginLeft: "30px", marginRight: "30px"});

/* Container for button and title */
let containerBtn = document.createElement('div');
containerBtn.append(decreaseBtn, title, increaseBtn);
defineStyleElem(containerBtn, {marginTop: "30px", marginBottom: "30px"});

/* Paragraph with the message to user */
let counterMessage = createParagraph();
defineStyleElem(counterMessage, {display: "none", fontSize: "20px", marginTop: "20px"});

/* Event Listener with event delegation and behaviour pattern in action */
containerBtn.addEventListener("click", (event) => {

  let action = event.target.dataset.action;
  let counterHTML = +getCounterHTML(counterPara);

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

  /* 
    Check if the counter is between the limits and set proper counter.
    If the user reaches the counter limits min or max, it will show a message to user.
  */
  if (isValidCounter(counterHTML, COUNTER_MIN, COUNTER_MAX)) {

    setCounterHTML(counterPara, counterHTML);
    defineStyleElem(counterMessage, {display: "none"});

  } else {

    counterMessage.innerHTML = defineMessageUser(counterHTML, COUNTER_MIN, COUNTER_MAX);
    defineStyleElem(counterMessage, {display: ""});

  }
});

counterDiv.append(containerBtn, counterPara, counterMessage);