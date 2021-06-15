/* Layout Counter */

let num = 0;
let counterDiv = document.getElementById("counter");

let decrementBtn = document.createElement("button");
decrementBtn.innerHTML = "-";

let para = document.createElement("p");
para.innerHTML = num;

let incrementBtn = document.createElement("button");
incrementBtn.innerHTML = "+";

let note = document.createElement("p");
note.innerHTML = "Contatore ha raggiunto il limite minimo";
note.style.display = "none";

counterDiv.append(decrementBtn, para, incrementBtn, note);


decrementBtn.addEventListener("click", () => {
  console.log("decrement: ", num);
  if (+para.innerHTML == 0) {
    note.style.display = "";
    return;
  }
  para.innerHTML = --num;
});

incrementBtn.addEventListener("click", () => {
  console.log("increment: ", num);
  para.innerHTML = ++num;
  if (+para.innerHTML > 0 ) {
    note.style.display = "none"
  }
});

function decrementNum(num) {
  return --num;
}

function incrementNum() {
  return ++num;
}

function setNum() {

}

function displayNum(num, element) {
  let currentNum = +element.innerHTML;
  element.innerHTML = num;

}

