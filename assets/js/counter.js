let counter = 10;

let increaseBtn = document.createElement("button");
increaseBtn.innerHTML = "+";

let title = document.createElement("h1");
title.innerHTML = "Counter";

let decreaseBtn = document.createElement("button");
decreaseBtn.innerHTML = "-";

let counterPara = document.createElement("p");
counterPara.innerHTML = counter;

if (isNaN(counter)) {
  counterPara.innerHTML = `Counter start "${counter}" is not valid`;
} else {
   counterPara.innerHTML = counter;
   increaseBtn.addEventListener('click', () => {++counter; counterPara.innerHTML = counter;});
   decreaseBtn.addEventListener('click', () => {--counter; counterPara.innerHTML = counter;});

 }

counterDiv.append(increaseBtn, title, decreaseBtn, counterPara);