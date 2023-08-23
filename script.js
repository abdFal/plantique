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

var image = document.getElementsByClassName("image-main");
new simpleParallax(image, {
  orientation: "left",
  transition: "cubic-bezier(0,0,0,0.5)",
  delay: 0.7,
  scale: 1.9,
  customWrapper: ".thumbnail",
});
