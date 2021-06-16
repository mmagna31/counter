/* Layout Counter */
const COUNTER_MIN = 0;
const COUNTER_MAX = 10;

let counter = COUNTER_MIN;
counter = COUNTER_MAX;

// let counterDiv = document.getElementById("counterDiv");

let increaseBtn = document.createElement("button");
increaseBtn.innerHTML = "+";
increaseBtn.setAttribute("data-action", "increase");

let para = document.createElement("p");
para.innerHTML = counter;

let decreaseBtn = document.createElement("button");
decreaseBtn.innerHTML = "-";
decreaseBtn.setAttribute("data-action", "decrease");

let msg = document.createElement("p");
msg.style.display = "none";

/* took from html */
counterDiv.append(increaseBtn, para, decreaseBtn, msg);
counterDiv.addEventListener("click", manageCounter);

/*==================================================================================*/

/* Event delegation & behavior pattern in action  */
function manageCounter(event) {

  if (event.target.dataset.action == "decrease") {
    
    if (counter <= COUNTER_MIN) {
      msg.innerHTML = `Counter starts from ${COUNTER_MIN}. Please increase the counter.`;
      msg.style.display = "block";
      return false;
    }
    msg.style.display = "none";
    para.innerHTML = --counter;
    
  } else if (event.target.dataset.action == "increase") {
    
    if (counter >= COUNTER_MAX) {
      msg.innerHTML = `Maxium counter ${COUNTER_MAX} reached. Please decrease the counter.`;
      msg.style.display = "block";
      return false;
    }
    msg.style.display = "none";
    para.innerHTML = ++counter;
    
  }

}
