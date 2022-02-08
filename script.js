var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var fsignup = document.getElementById("fsignup");
var lsignup = document.getElementById("lsignup");

btn1.addEventListener("click", function () {
  fsignup.style.display = "none";
  lsignup.style.display = "block";
});
btn3.addEventListener("click", function () {
  lsignup.style.display = "none";
  fsignup.style.display = "block";
});
