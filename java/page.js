//NAV//
function navToggle() {
  var x = document.getElementById("navigation");
    if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
//CAROUSEL//
var slideIndex = 1;
showSlides(slideIndex);
function moveSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//MODAL//
var modselect = 0;
modview(modselect);
function showModal(m) {
  modview(modselect = m)
}

function modview(m) {
  var l;
  var keys = document.getElementsByClassName("modal")
  for (l=0; l < keys.length; l++) {
    keys[l].style.display = "none";
  }
  keys[modselect-1].style.display = "block";
}

function kill() {
  var kills = document.getElementsByClassName("modal")
  kills[modselect-1].style.display = "none";
}
