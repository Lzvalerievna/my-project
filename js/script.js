
/*let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  */

  const slider = document.querySelector('.swiper-container');

  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == "false") {
     mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     });
     slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 768) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-container-initialized')) { 
      mySwiper.destroy();
    }
   }
  }


  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });

 