// 변수선언
const wrapper = document.querySelector(".slide_wrapper");
const slides = document.querySelector(".slide_wrapper .slides");
const slide = document.querySelectorAll(".slide_wrapper .slides li");

// 애니메이션에 필요한 변수값들
let current = 0;
let count = 0;

// 높이값 셋팅
const setHeight = () => {
  wrapper.style.height = slide[0].offsetHeight + "px";
};

const rollingHeight = () => {
  slides.classList.add("animate");
  current -= wrapper.offsetHeight;
  slides.style.transform = `translateY(${current}px)`;
  count++;

  if (count === 4) {
    cloneMenu();
    count = 0;
    console.log(count);

    setTimeout(() => {
      removeMenu();
      current = 0;
      slides.style.transform = `translateY(${0}px)`;
      slides.classList.remove("animate");
    }, 600);
  }
};

const cloneMenu = () => {
  for (let i = 0; i < slide.length; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
};

const removeMenu = () => {
  for (let i = 0; i < slide.length; i++) {
    slide[i].remove();
  }
};

setInterval(rollingHeight, 1000);

setHeight();
