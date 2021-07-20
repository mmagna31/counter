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

  let btnEffectStyle = {
    pointerover : {
      backgroundColor: "#2D3047"
    },
    pointerout : {
      backgroundColor: "transparent"
    },
    pointerdown : {
      opacity: "0.5",
      transition: "0.3s"
    },
    pointerup : {
      opacity: "1",
      transition: "0.3s"
    },
  }

  /* Adding style effect to all buttons on counterBtn */
  counterBtn.querySelectorAll("button").forEach(
    (currentValue) => btnEffect(currentValue, btnEffectStyle)
  );

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  return counterBox;

}

