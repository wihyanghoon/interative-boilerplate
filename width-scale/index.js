window.onload = () => {
  // 변수선언
  const imgContainer = document.querySelector(".img-container");
  let scrollHeight = imgContainer.getBoundingClientRect().top - 90;

  // 초기 width값 할당
  imgContainer.style.width = `${100 - scrollHeight * 0.1}%`;

  const onscroll = () => {
    scrollHeight = imgContainer.getBoundingClientRect().top - 90;
    console.log(imgContainer.getBoundingClientRect().bottom);
    if (scrollHeight <= 0) {
      imgContainer.style.width = `${100}%`;
    } else {
      console.log("scroll", scrollHeight * 0.1);
      imgContainer.style.width = `${100 - scrollHeight * 0.1}%`;
    }
  };
  window.addEventListener("scroll", onscroll);
};
