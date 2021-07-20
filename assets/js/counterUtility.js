/* Factory function to set buttons style */

function setBtnStyle(styleObject = {}) {
  /*  */
  return (event) => {
    if (event.type in styleObject) {
      for (let [key, value] of Object.entries(styleObject[event.type])) {
        event.target.closest('button').style[key] = value;
      }
    }
  }
}

function btnEffect(btn, btnEffectStyle = {}) {
  /* Apply style based on the proper Pointer events */

  /* Using factory function in order to apply style to buttons according to button event*/
  let setEffect = setBtnStyle(btnEffectStyle);

  /*  */
  function addingSetPointerCapture(event) {
    event.target.closest('button').setPointerCapture(event.pointerId);
    setEffect(event);
  }

  btn.addEventListener("pointerover", setEffect);
  btn.addEventListener("pointerout", setEffect);
  btn.addEventListener("pointerdown", addingSetPointerCapture);
  btn.addEventListener("pointerup", setEffect);

}

function createCustomBtn(action, codeHtml) {
  /* Return a button generated with custom action and text inside it */
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.setAttribute("data-action", action);
  btn.insertAdjacentHTML('afterbegin', codeHtml);
  return btn;
}