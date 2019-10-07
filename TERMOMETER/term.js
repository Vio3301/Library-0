
function executeAction(e){
  switch (e.keyCode) {
    case 38: moveUp(); break;
    case 40: moveDoun(); break;
  }
}
var n = -20
function moveUp() {
  n++
  var div = document.getElementById("termometer-indicator")
 var input = document.getElementById("temperature-input")
 var a = input.placeholder =`${n}`
  if (a >= -20 && a <= 50) {
    var e = 3 * a
    var t = 62.50 + e
    div.style.width = `${t}px`;
    div.style.backgroundColor = 'red'
  } else {
    div.style.backgroundColor = 'white'
    div.style.width = `0px`;
  }
}

function moveDoun() {
  n--
  div = document.getElementById("termometer-indicator")
  input = document.getElementById("temperature-input")
  var a = input.placeholder = `${n}`
  if (a >= -20 && a <= 50) {
    var e = 3 * a
    var t = 62.50 + e
    div.style.width = `${t}px`;
    div.style.backgroundColor = 'red'
  } else {
    div.style.backgroundColor = 'white'
    div.style.width = `0px`;
  }

}
document.body.onkeydown = executeAction