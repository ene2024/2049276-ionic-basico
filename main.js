let BA = document.getElementById("buttonA");
let BB = document.getElementById("buttonB");
let BC = document.getElementById("buttonC")
let body = document.querySelector("body");

BA.onclick = function () {
  //console.log(sar1.value);
  alert(sar1.value);
}

BB.onclick = function () {
  sar1.value = " ";
}

BC.onclick = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = color;
}

/*BB.addEventListener("click", function () {
  sar1.value = " ";
})*/






