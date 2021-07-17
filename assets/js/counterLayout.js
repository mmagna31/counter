function btnEffect(btn) {
  /* Apply proper style based on the proper Pointer events */

  btn.addEventListener("pointerover", () => {
    btn.style.backgroundColor = "#2D3047";
  });

  btn.addEventListener("pointerout", () => {
    btn.style.backgroundColor = "transparent";
  });

  btn.addEventListener("pointerdown", (event) => {
    btn.setPointerCapture(event.pointerId);
    btn.style.opacity = "0.5";
    btn.style.transition = "0.3s";
  });

  btn.addEventListener("pointerup", () => {
    btn.style.opacity = "1";
    btn.style.transition = "0.3s";
  });

}

function createCustomBtn(action, codeHtml) {
  /* Return a button generated with custom action and text inside it*/
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.setAttribute("data-action", action);
  btn.insertAdjacentHTML('afterbegin', codeHtml);
  return btn;
}

function defineLayout(num=0) {

  /* return a div with the defined layout */
  
  const COUNTER_START = bigInt(num)
  let counter = COUNTER_START;
      
  let counterNum = document.createElement("p");
  counterNum.className = "counter-num";
  counterNum.innerHTML = counter;

  /* Button implementation */
  let decreaseBtn = createCustomBtn('decrease', '<i class="fas fa-minus"></i>');
  let increaseBtn = createCustomBtn('increase', '<i class="fas fa-plus"></i>');
  let resetBtn = createCustomBtn('reset', '<i class="fas fa-undo"></i>');

  let counterBtn = document.createElement("div");
  counterBtn.className = "counter-btn";
  counterBtn.append(decreaseBtn, increaseBtn, resetBtn);

  /* Event Listener with event delegation and behaviour pattern in action */
  counterBtn.addEventListener("click", (event) => {

    let btn = event.target.closest('button');

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

  /* Adding style effect to all buttons on counterBtn */
  counterBtn.querySelectorAll("button").forEach(
    (currentValue) => btnEffect(currentValue)
  );

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  return counterBox;

}

document.querySelector("main").append(defineLayout());