(() => {
  const elWrapper = document.querySelector('.slide_wrapper');
  const elUl = document.querySelector('ul');
  const elLis = document.querySelectorAll('li');

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // 카운트 및 width값
  let elWidth = 0;
  let count = 0;
  // 마우스 좌표값
  let startPoint
  let endPoint

  const setEl = () => {
    // 한 번에 움직여야 하는 값 계산
    elWidth = elLis[0].offsetWidth;
    elUl.style.width = `${elWidth * elLis.length}px`; // ul 요소의 너비 설정
  };

  const setStartPoint = (e) => {
    startPoint =  e.pageX
  }

  const setEndPoint = (e) => {
    endPoint = e.pageX
    startPoint > endPoint ? onNext() : onPrev()
  }

  const onNext = () => {
    count++;
    if (count >= elLis.length) {
      count = 0;
    }
    onMove();
  };

  const onPrev = () => {
    count--;
    if (count < 0) {
      count = elLis.length - 1;
    }
    onMove();
  };

  const onMove = () => {
    elUl.style.transform = `translateX(-${elWidth * count}px)`;
  };


  setEl();

  nextBtn.addEventListener('click', onNext);
  prevBtn.addEventListener('click', onPrev);

  elUl.addEventListener('mousedown', setStartPoint)
  elUl.addEventListener('mouseup', setEndPoint)
  elUl.addEventListener('drag', onTrans)
})();