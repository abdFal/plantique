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
  } // add zero in front of numbers < 10
  return i;
}

var image = document.getElementsByClassName("image-main");
new simpleParallax(image, {
  orientation: "right",
  transition: "cubic-bezier(0.1,0,0,0.3)",
  delay: 0.6,
  scale: 1.7,
  customWrapper: ".thumbnail",
});
