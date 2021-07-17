function defineLayout(num = 0) {

  /* return a div with the defined layout */
  
  const COUNTER_START = bigInt(num)
  let counter = COUNTER_START;
      
  let counterNum = document.createElement("p");
  counterNum.className = "counter-num";
  counterNum.innerHTML = counter;
  
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

  let counterBtn = document.createElement("div");
  counterBtn.className = "counter-btn";
  counterBtn.append(decreaseBtn, increaseBtn, resetBtn);

  /* Event Listener with event delegation and behaviour pattern in action */
  counterBtn.addEventListener("click", (event) => {

    let btn = event.target.closest('button');
    console.log("click---",event.target);
    console.log("click--- btn", btn);

    if (!btn) {
      return false;
    }

    let action = btn.dataset.action;

    switch(action) {
      case "decrease":
        counter = counter.subtract(1);
        break;
      case "increase":
        counter = counter.add(1);
        break;
      case "reset":
        counter = COUNTER_START;
        break;
    }

    counterNum.innerHTML = counter;

  });

  /* add style to button on counterBtn */
  counterBtn.querySelectorAll("button").forEach(
    (currentValue) => {
      
      currentValue.addEventListener("pointerover", () => {
        currentValue.style.opacity = "0.5";
      });

      currentValue.addEventListener("pointerout", () => {
        currentValue.style.opacity = "1";
      });

      currentValue.addEventListener("pointerdown", () => {
        currentValue.setPointerCapture(event.pointerId);
        // currentValue.style.transform = "scale(0.9)";
        currentValue.style.backgroundColor = "#2D3047";
        currentValue.style.transition = "0.1s";

      });

      currentValue.addEventListener("pointerup", () => {
        currentValue.style.backgroundColor = "transparent";
        currentValue.style.transition = "0.1s";
      });
  });

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  return counterBox;

}

document.querySelector("main").append(defineLayout());


// function isValidCounter(counter) {
//   /* Check if counter is a valid number */
//   return !isNaN(counter) && isFinite(counter) && counter != null;
// }