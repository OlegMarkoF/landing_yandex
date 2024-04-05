let slideIndex = 1;
let cardIndex = 1;
const indicators = Array.from(document.querySelectorAll(".indicator"));

let timer = setInterval(function(){
  slideIndex++;
  showSlides(slideIndex);
}, 4000);

showSlides(slideIndex);
showCardsSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function nextCard(n) {
  showCardsSlides((cardIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function showSlides(n) {
  const slides = document.getElementsByClassName(
    "slideshow-container__participants"
  );

  const participantCount = document.querySelector(".participant-count");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  participantCount.textContent = slideIndex + " / " + slides.length;
  slides[slideIndex - 1].style.display = "flex";

}

function showCardsSlides(n) {
  const cards = document.getElementsByClassName("split");
  const nextBtn = document.querySelector("next-card__btn");
  const prevBtn = document.querySelector("prev-card__btn");

  if (n > cards.length) {
    cardIndex = 1;
  }
  if (n < 1) {
    cardIndex = cards.length;
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[cardIndex - 1].style.display = "block";
  activateIndicator(cardIndex - 1);
}
