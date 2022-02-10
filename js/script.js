$(document).ready(function () {
  $("#pickupBtn").click(function () {
    $("#page2-1").css({ display: "none" });
    $("#pickupLocation").css({ display: "block" });
  });
  $("#destinationBtn").click(function () {
    $("#page2-1").css({ display: "none" });
    $("#destination").css({ display: "block" });
  });
  $("#requestBtn").click(function () {
    $("#page2-1").css({ display: "none" });
    $("#request").css({ display: "block" });
  });
  var myArray = [fname, lname, email, upass, pnumber, town];
  $("#btn1").click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    if (fname == "") {
      $("#fname").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else if (lname == "") {
      $("#lname").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else if (email == "") {
      $("#email").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else {
      $("#fsignup").css({ display: "none" });
      $("#lsignup").css({ display: "block" });
    }
  });
  $("#btn3").click(function (event) {
    $("#lsignup").css({ display: "none" });
    $("#fsignup").css({ display: "block" });
    $(".formf").trigger("reset");
    $("input").css({ border: "none", boxShadow: "none" });
  });
  $("#btn2").click(function (event) {
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    if (upass == "") {
      $("#upass").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else if (pnumber == "") {
      $("#pnumber").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else if (town == "") {
      $("#town").css({
        outline: "none",
        borderColor: "#a91010",
        boxShadow: "0 0 10px #a91010",
      });
    } else {
      alert("success we'll notify you if you qualify");
    }
  });
  $(myArray[0]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#fname").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
  $(myArray[1]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#lname").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
  $(myArray[2]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#email").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
  $(myArray[3]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#upass").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
  $(myArray[4]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#pnumber").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
  $(myArray[5]).click(function (event) {
    var fname = $("input[name='fname']").val();
    var lname = $("input[name='lname']").val();
    var email = $("input[name='email']").val();
    var upass = $("input[name='upass']").val();
    var pnumber = $("input[name='pnumber']").val();
    var town = $("input[name='town']").val();
    var myArray = [fname, lname, email, upass, pnumber, town];
    $("#town").css({
      outline: "none",
      borderColor: "#719ece",
      boxShadow: "0 0 10px #719ece",
    });
  });
});

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var fsignup = document.getElementById("fsignup");
// var lsignup = document.getElementById("lsignup");

// btn1.addEventListener("click", function () {
//   fsignup.style.display = "none";
//   lsignup.style.display = "block";
// });
// btn3.addEventListener("click", function () {
//   lsignup.style.display = "none";
//   fsignup.style.display = "block";
//   document.querySelector("formf").reset();
// });
