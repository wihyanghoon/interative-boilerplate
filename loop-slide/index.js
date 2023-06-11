// Dom 변수선언 및 할당
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const currentIdx = 0; // 인덱스값
const slideCount = slide.length;
const slideWidth = 200; // 각 아이템의 가로값
const SlideMargin = 30; // 각 아이템의 마진값
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// 앞뒤로 새로운 리스트 생성하는 함수
const makeClone = () => {
  //뒤에 붙이기
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  //앞에 붙이기
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitalPos();

  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

// 새로 생성된 slide 넓이 계산 함수
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;

  const newWidth = `${
    (slideWidth + SlideMargin) * newSlideCount - SlideMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitalPos = () => {
  let initialTranslate = `-${(slideWidth + SlideMargin) * slideCount}px`;
  slides.style.transform = `translateX(${initialTranslate})`;
};

const moveSlide = () => {
    
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

makeClone();
