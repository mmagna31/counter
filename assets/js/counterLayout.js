function defineLayout(num=0) {
  /* It returns a div with the defined layout for the counter */
  
  const COUNTER_START = bigInt(num)
  let counter = COUNTER_START;
      
  let counterNum = document.createElement("p");
  counterNum.className = "counter-num";
  counterNum.innerHTML = counter; // initial counter value 

  /* Buttons implementation */
  let decreaseBtn = createCustomBtn('decrease', '<i class="fas fa-minus"></i>');
  let increaseBtn = createCustomBtn('increase', '<i class="fas fa-plus"></i>');
  let resetBtn = createCustomBtn('reset', '<i class="fas fa-undo"></i>');

  let counterBtn = document.createElement("div");
  counterBtn.className = "counter-btn";
  counterBtn.append(decreaseBtn, increaseBtn, resetBtn);

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  /* Adding over and out effects to all buttons on counterBtn */
  counterBtn.querySelectorAll("button").forEach(
    (currentValue) => {

      /* object to define the style of the button according to pointer event */
      let btnEffectStyle = {
        pointerover : {
          backgroundColor: "#2D3047"
        },
        pointerout : {
          backgroundColor: getComputedStyle(currentValue).backgroundColor
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

  /* 
     Event listener to handle the counter value defined with 
     event delegation and behaviour patterns
  */
  counterBtn.addEventListener("click", (event) => {

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
  });

  return counterBox;
}

