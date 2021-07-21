function defineLayout(num=0) {
  /* return a div with the defined layout */
  
  const COUNTER_START = bigInt(num)
  let counter = COUNTER_START;
      
  let counterNum = document.createElement("p");
  counterNum.className = "counter-num";
  counterNum.innerHTML = counter; // initial counter value 

  /* Button implementation */
  let decreaseBtn = createCustomBtn('decrease', '<i class="fas fa-minus"></i>');
  let increaseBtn = createCustomBtn('increase', '<i class="fas fa-plus"></i>');
  let resetBtn = createCustomBtn('reset', '<i class="fas fa-undo"></i>');

  let counterBtn = document.createElement("div");
  counterBtn.className = "counter-btn";
  counterBtn.append(decreaseBtn, increaseBtn, resetBtn);

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  /* Event Listener: Adding over and out effects to all buttons on counterBtn */
  counterBtn.querySelectorAll("button").forEach(
    (currentValue) => {

      let currentStyle = getComputedStyle(currentValue);

      /* object to define the style of the button according to pointer event */
      let btnEffectStyle = {
        pointerover : {
          backgroundColor: "#2D3047"
        },
        pointerout : {
          backgroundColor: currentStyle.backgroundColor
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

      btnEffect(currentValue, btnEffectStyle);
    }
  );

  /* function for Event listener with event delegation and behaviour pattern in action */
  function manageCounter(event) {

    let btn = event.target.closest('button');

    if (!btn) {
      return false;
    }

    switch(btn.dataset.action) {
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
  }

 
  counterBtn.addEventListener("click", manageCounter);

  return counterBox;
}

