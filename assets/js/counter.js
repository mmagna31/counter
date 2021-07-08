/* Utility functions */

function isValidCounter(counter) {
  /* Check if counter is a valid number */
  return !isNaN(counter) && isFinite(counter) && counter != null;
}

/* End Utility functions */


function createCustomBtn(text = "", action = "") {
  /* It creates a button with text provided and value for custom attribute */
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.setAttribute("data-action", action);
  return btn;
}

function defineStyleElem(elem, styleObj = {}) {
  /* It takes an object with the dom style properties and 
     assigns them to the element */
  for (let [key, value] of Object.entries(styleObj)) {
    elem.style[key] = value;
  }
}

function defineLayout(num) {

  /* return a div with the defined layout */

  let counter = +num;

  let counterBox = document.createElement("div");
      
  let counterDisplay = document.createElement("div");
  counterDisplay.className = "counter-display";
  
  let counterNum = document.createElement("p");
  counterDisplay.className = "counter-num";
  counterNum.innerHTML = counter;
  
  let counterMsg = document.createElement("p");
  counterMsg.className = "message";
  counterMsg.hidden = true;
  
  counterDisplay.append(counterNum, counterMsg);
  let counterBtn = document.createElement("div");
  counterBtn.className = "counter-btn";
  
  let decreaseBtn = document.createElement("button");
  decreaseBtn.className = "btn";
  decreaseBtn.setAttribute("data-action", "decrease");
  decreaseBtn.insertAdjacentHTML('afterbegin', '<i class="fas fa-minus"></i>');

  let increaseBtn = document.createElement("button");
  increaseBtn.className = "btn";
  increaseBtn.setAttribute("data-action", "increase");
  increaseBtn.insertAdjacentHTML('afterbegin', '<i class="fas fa-plus"></i>');

  let resetBtn = document.createElement("button");
  resetBtn.className = "btn";
  resetBtn.setAttribute("data-action", "reset");
  resetBtn.insertAdjacentHTML('afterbegin', '<i class="fas fa-undo"></i>');

  counterBtn.append(decreaseBtn, increaseBtn, resetBtn);

  
  /* Event Listener with event delegation and behaviour pattern in action */
  // counterBtn.addEventListener("click", (event) => {
  //   let action = event.target.dataset.action;
  //   switch(action) {
  //     case "decrease":
  //       --counter;
  //       break;
  //     case "increase":
  //       ++counter;
  //       break;
  //     case "reset":
  //       counter = num;
  //       break;
  //   }
  //   if (isValidCounter(counter)) {
  //     counterNum.innerHTML = counter;
  //   } else {
  //     return false;
  //   }
  // });

  counterBox.append(counterDisplay, counterBtn);

 
  return counterBox;

}

let counter = 0;
document.querySelector("main").append(defineLayout(counter));