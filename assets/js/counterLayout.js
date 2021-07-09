function defineLayout(num) {

  /* return a div with the defined layout */

  let counter = bigInt(num);
  // let counter = +num;
      
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

    console.log(counter);

    let btn = event.target.closest('button');

    if (!btn) {
      return false;
    }

    let action = btn.dataset.action;

    switch(action) {
      case "decrease":
        console.log("decrease", typeof counter);
        --counter;
        break;
      case "increase":
        console.log("increase", counter);
        ++counter;
        break;
      case "reset":
        console.log("in reset", counter);
        counter = num;
        break;
    }

    console.log(counter);
    // if (isValidCounter(counter)) {
      counterNum.innerHTML = counter;
    // } 

  });

  let counterBox = document.createElement("div");
  counterBox.append(counterNum, counterBtn);

  return counterBox;

}

let counter = 10000000000000000000000000000000000000000000000000000000000000000000000000000; // TO DO: verifica counter iniziale stringa
document.querySelector("main").append(defineLayout(counter));