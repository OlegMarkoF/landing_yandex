const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const cards = document.querySelectorAll(".split");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const nextCardBtn = document.querySelector(".next-card__btn");
const prevCardBtn = document.querySelector(".prev-card__btn");
const participantCount = document.querySelector(".participant-count");
const active = document.querySelector(".active");

const indicators = Array.from(document.querySelectorAll(".indicator"));
let currentSlide = 0;
let currentCard = 1;

let timer = setInterval(function () {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}, 4000);

showCardsSlides(currentCard);

function showSlide() {
  slides.forEach((slide, index) => {
    if (window.innerWidth >= 1024) {
      if (index === currentSlide) {
        slide.style.display = "flex";
        slide.classList.add("active");
      } else if (
        index === currentSlide - 1 ||
        (currentSlide === 0 && index === slides.length - 1)
      ) {
        slide.style.display = "flex";
        slide.classList.remove("active");
      } else if (
        index === currentSlide + 1 ||
        (currentSlide === slides.length - 1 && index === 0)
      ) {
        slide.style.display = "flex";
        slide.classList.remove("active");
      } else {
        slide.style.display = "none";
        slide.classList.remove("active");
      }
    } else if (window.innerWidth < 1024) {
      if (index === currentSlide) {
        slide.style.display = "flex";
        slide.classList.add("active");
      } else {
        slide.style.display = "none";
        slide.classList.remove("active");
      }
    }
    participantCount.textContent = currentSlide + 1 + " / " + slides.length;
  });
}
showSlide();

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function updateButtons() {
  console.log(currentCard)
  if (currentCard === cards.length) {
    prevCardBtn.disabled = true;
  } else {
    prevCardBtn.disabled = false;
  }
  if (currentCard <= 1) {
    nextCardBtn.disabled = true;
  } else {
    nextCardBtn.disabled = false;
  }
}

function showCardsSlides() {
  cards.forEach((slide, index) => {
    if (window.innerWidth < 1330) {
      if (index === currentCard - 1) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    } else {
      slide.style.display = "flex";
    }
  });
  activateIndicator(currentCard - 1);
}
showCardsSlides();

prevCardBtn.addEventListener("click", () => {
  currentCard++;
  updateButtons();
  showCardsSlides()
});
nextCardBtn.addEventListener("click", () => {
  currentCard--;
  updateButtons();
  showCardsSlides()
});

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

window.addEventListener("resize", () => {
  showSlide;
  showCardsSlides();
  updateButtons;
});
