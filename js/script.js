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

var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + -5+"px"
    crsr.style.top = dets.y + -6+"px"
})
var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "10px"
        crsr.style.height = "10px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

// var paper = document.getElementsByClassName("image-paper");
// new simpleParallax(paper);

// ngilangin watermark
window.onload = function() {
  var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
  shadowRoot.querySelector('#logo').remove();
}

// parallax - thing
var image = document.getElementsByClassName("image-thing-first");
new simpleParallax(image, {
  orientation: "down",
  transition: "cubic-bezier(0,0,0,0.5)",
  delay: 0.2,
  scale: 1.8,
  customWrapper: ".thumbnail",
});

// ppe text
const elements = document.querySelectorAll(".plant-header");
let interval;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const handleMouseOver = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

elements.forEach(element => {
  element.addEventListener("mouseover", handleMouseOver);
});

