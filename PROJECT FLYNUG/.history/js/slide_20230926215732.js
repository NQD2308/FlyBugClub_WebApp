var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    loop: true,
    // slideToClickedSlide: true,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    on: {
      slideChange: function () {
        let activeIndex = this.activeIndex + 1;
  
        let activeSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`);
        let nextSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex + 1})`);
        let prevSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex - 1})`);
  
        if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
            this.thumbs.swiper.slideNext()    
        } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
            this.thumbs.swiper.slidePrev()    
        }    
      }
    },
    // centerInsufficientSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    height: 200,
  });