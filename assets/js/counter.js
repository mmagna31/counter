/* Utility functions */

function isValidCounter(counter) {
  /* Check if counter is a valid number */
  return !isNaN(counter) && isFinite(counter) && counter != null;
}

/* End Utility functions */

/* Layout functions */

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

  let counter = num;

  let counterLayout = document.createElement("div");
  
  if (isValidCounter(counter)) {
    
    let counterBox = document.createElement("div");

    let title = document.createElement("p");
    title.innerHTML = "Counter";

    let increaseBtn = createCustomBtn("+", "increase");
    
    let decreaseBtn = createCustomBtn("-", "decrease");

    let resetBtn = createCustomBtn("-", "reset");
    
    let containerBtn = document.createElement("div");
    containerBtn.append(decreaseBtn, increaseBtn, resetBtn);
    
    let counterPara = document.createElement("p");
    counterPara.innerHTML = +counter;
    
    /* Event Listener with event delegation and behaviour pattern in action */
    containerBtn.addEventListener("click", (event) => {
      let action = event.target.dataset.action;

      switch(action) {
        case "decrease":
          --counter;
          break;
        case "increase":
          ++counter;
          break;
        case "reset":
          counter = num;
          break;
      }

      if (isValidCounter(counter)) {
        counterPara.innerHTML = counter;
      } else {
        return false;
      }

    });
  
    counterLayout.append(containerBtn, counterPara);
  
  } else {
    let counterError = document.createElement("p");
    counterError.innerHTML = `Unable to define layout for counter  "${counter}". It is not a valid number.`;
    counterLayout.append(counterError);
  }

  return counterLayout;

}

/* End Layout function */

let counter = 0;
counterDiv.append(defineLayout(counter));