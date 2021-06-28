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

function defineLayout(counter) {
  /* return a div with the defined layout */

  /* Objects to style the elements */
  let btnStyle = {
    paddingLeft: "10px",
    paddingRight: "10px",
    minWidth: "50px",
    minHeight: "30px",
    backgroundColor: "white",
    borderRadius: "10px", 
    border: "2px solid black",
    cursor: "pointer",
  };

  let h1Style = {
    display: "inline",
    paddingLeft: "20px",
    paddingRight: "20px",
  }

  let counterLayout = document.createElement("div");

  if (isValidCounter(counter)) {
    
    let title = document.createElement("h1");
    title.innerHTML = "Counter";
    defineStyleElem(title, h1Style);

    let increaseBtn = createCustomBtn("+", "increase");
    defineStyleElem(increaseBtn, btnStyle);
    
    let decreaseBtn = createCustomBtn("-", "decrease");
    defineStyleElem(decreaseBtn, btnStyle);
    
    let containerBtn = document.createElement("div");
    containerBtn.append(decreaseBtn, title, increaseBtn);
    
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