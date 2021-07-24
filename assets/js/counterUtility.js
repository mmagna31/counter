/* 
  Factory function to set buttons style for a specific event type.
  It takes as input an object with Event as key and its style.
  eg. setBtnStyle({ pointerover : { color: "white" }})
*/
function setBtnStyle(styleObject) {
  return (event) => {
    if (event.type in styleObject) {
      for (let [key, value] of Object.entries(styleObject[event.type])) {
        event.target.closest('button').style[key] = value;
      }
    }
  }
}

/* It applies the style to button based on the proper pointer events */
function btnEffect(btn, btnEffectStyle) {

  /* Using function in order to define the button style */
  let setEffect = setBtnStyle(btnEffectStyle);

  /* It extends setBtnStyle function to capture the pointer */
  function addPntCapture(event) {
    event.target.closest('button').setPointerCapture(event.pointerId);
    setEffect(event);
  }

  btn.addEventListener("pointerover", setEffect);
  btn.addEventListener("pointerout", setEffect);
  btn.addEventListener("pointerdown", addPntCapture);
  btn.addEventListener("pointerup", setEffect);

  /* It prevents standard touch-related browser actions */
  btn.style.touchAction = "none";
}

/* It defines a button generated with custom action and text inside it */
function createCustomBtn(action, codeHtml) {
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.setAttribute("data-action", action);
  btn.insertAdjacentHTML('afterbegin', codeHtml);
  return btn;
}