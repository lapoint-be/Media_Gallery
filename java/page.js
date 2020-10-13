var slideNum = 1;
showSlide(slideNum);

function moveSlides(n) {
  showSlide(slideNum += n);
}

function currentSlide(n) {
  showSlide(slideNum = n)
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("cursor");
  var captionText = document.getElementById("caption");
  if (n > slide.length) {slideNum = 1}
  if (n < 1) {slideNum = slide.length}
  for (i=0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "")
  }
  slide[slideNum-1].style.display="block";
  dots[slideNum-1].className+="active";
  captionText.innerHTML=dots[slideNum-1].alt;
}
