//Create a div inside body tag
// const div = document.createElement("div");
// div.innerText = "This is a div";
// const body = document.getElementById("body-tag");
// body.appendChild(div);

// function clickMe() {
//   document.getElementById("heading2").innerText = "I am from BD";
// }

// function currentDate() {
//   document.getElementById("showDate").innerText = Date();
// }

const forAlert = document.getElementById("alert");
forAlert.addEventListener("click", function () {
  alert();
});

const green = document.getElementById("colour");
green.addEventListener("click", function () {
  document.body.style.background = "green";
});

document.getElementById("date").addEventListener("click", function () {
  document.getElementById("showDate").innerText = Date();
});
