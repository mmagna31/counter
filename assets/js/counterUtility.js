/* Factory function to set buttons style based on the event */
function setBtnStyle(styleObject = {}) {
  return (event) => {
    if (event.type in styleObject) {
      for (let [key, value] of Object.entries(styleObject[event.type])) {
        event.target.closest('button').style[key] = value;
      }
    }
  }
}

/* Apply style based on the proper Pointer events */
function btnEffect(btn, btnEffectStyle = {}) {

  /* Using factory function in order to apply style to buttons */
  let setEffect = setBtnStyle(btnEffectStyle);

  /* Extend setEffect function to capter the pointer */
  function addingSetPointerCapture(event) {
    event.target.closest('button').setPointerCapture(event.pointerId);
    setEffect(event);
  }

  btn.addEventListener("pointerover", setEffect);
  btn.addEventListener("pointerout", setEffect);
  btn.addEventListener("pointerdown", addingSetPointerCapture);
  btn.addEventListener("pointerup", setEffect);

  /* prevent touch-related browser actions */
  btn.style.touchAction = "none";
}

/* Return a button generated with custom action and text inside it */
function createCustomBtn(action, codeHtml) {
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.setAttribute("data-action", action);
  btn.insertAdjacentHTML('afterbegin', codeHtml);
  return btn;
}