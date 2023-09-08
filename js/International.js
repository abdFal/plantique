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

// back to index

function redirectToIndex() {
  const whiteOverlay = document.getElementById("white-overlay");

  whiteOverlay.style.opacity = "1";

  setTimeout(function () {
      window.location.href = "index.html";
  }, 500);
}

// page transition

function setupPageTransition() {
    const whiteOverlay = $("#white-overlay");
    whiteOverlay.css("opacity", "1");
}

$(document).ready(function () {
    setupPageTransition();

    const allAssetsLoaded = Array.from(document.images).every(img => img.complete);

    if (allAssetsLoaded) {
        const whiteOverlay = $("#white-overlay");
        setTimeout(function () {
            whiteOverlay.css("opacity", "0");
        }, 1000);
    }
});