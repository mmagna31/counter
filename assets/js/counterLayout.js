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
  counterBtn.addEventListener("click", (event) => {

    let action = event.target.closest('button').dataset.action;

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
      counterNum.innerHTML = counter;
    } 

  });

  counterBox.append(counterDisplay, counterBtn);

  return counterBox;

}



let counter = 0; // TO DO: verifica counter iniziale stringa
document.querySelector("main").append(defineLayout(counter));