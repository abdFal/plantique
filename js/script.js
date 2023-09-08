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

// cursor
var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + -5 + "px";
  crsr.style.top = dets.y + -6 + "px";
});
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "10px";
    crsr.style.height = "10px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

// thumbnail Parallax
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    $('.image-main').css({
      transform: 'translateX(' + -scroll / 14 + 'px)',
    });
  });
});

// thing Parallax
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    var slowScroll = scroll / 10;

    $('.image-thing-first').css({
      transform: 'translateY(' + slowScroll + 'px)',
    });
  });
});

// ppe text
const elements = document.querySelectorAll(".plant-header");
let interval;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const handleMouseOver = (event) => {
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

elements.forEach((element) => {
  element.addEventListener("mouseover", handleMouseOver);
});




// go to pattern

function redirectToPattern() {
  const whiteOverlay = document.getElementById("white-overlay");

  whiteOverlay.style.opacity = "1";

  setTimeout(function () {
      window.location.href = "pattern.html";
  }, 500);
}
// page transition
function setupPageTransition() {
  const whiteOverlay = $("#white-overlay");

  whiteOverlay.css("opacity", "1");
}

$(document).ready(function () {
  setupPageTransition();

  $(window).on("load", function () {
      const whiteOverlay = $("#white-overlay");

      setTimeout(function () {
          whiteOverlay.css("opacity", "0");
      }, 1000);
  });
});

window.addEventListener("load", setupPageTransition);
