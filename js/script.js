// loading
window.addEventListener("load", function () {
  var preloader = document.querySelector(".center-body");
  preloader.style.display = "none";
});

// clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getUTCSeconds();
  s = checkTime(s);
  m = checkTime(m);
  document.getElementById("clock").innerHTML = h + "." + m + "." + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// parallax
var image = document.getElementsByClassName("image-main");
var instance = new simpleParallax(image, {
  orientation: "left",
  transition: "cubic-bezier(0,0,0,0.8)",
  delay: 0.7,
  scale: 1.69,
  customWrapper: ".thumbnail",
});

// var paper = document.getElementsByClassName("image-paper");
// new simpleParallax(paper);
