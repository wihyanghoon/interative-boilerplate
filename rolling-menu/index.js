const autoToggle = function (elWrapper){
    
    

  const elSlideUl = elWrapper.querySelector('.slides');
  const elSlideLi = elSlideUl.querySelectorAll('li'); 

  
  let elLiHeight = 20 // 한번에 움직이는 양
  let count  = 0;
                          
  // const init = ()=> {
  //     // initialized
  //     setEl();
  //     setAnimation();
  // }

  const setEl = () => {
      // 1번째 노드를 마지막에 추가 하여 무한으로 돌 수 있도록 하자
      // elLiHeight = elSlideLi[0].offsetHeight;
      const elCopy = elSlideLi[0].cloneNode(true)
      elSlideUl.appendChild(elCopy)
      
  }

  const setAnimation = () => {
      // setinterval 을 시작하고 제어
      elLiHeight = 20;
      elSlideUl.style.transition = 'transform 0.7s 0.5s ease-in-out';
      elSlideUl.style.transform = 'translateY(' + ((elLiHeight * count ) * -1) + '%)';
      elSlideUl.addEventListener('transitionend', onTransitionEnd);
  }

  const setRestart = () => {
      count = 0;
      elLiHeight = 0;
      elSlideUl.style.transition = 'transform 0s';
      elSlideUl.style.transform = 'translateY(0)';
      
      setInterval(() => {
          setAnimation()
      }, 500);
  }

  const onTransitionEnd = ()=> {
      // trnasition end 가 될 경우 실행됨
      count ++;
      setAnimation();
      
      count === 5 ? setRestart() : null
  }


  setEl()
  setAnimation()
}(document.querySelector(".slide_wrapper"));