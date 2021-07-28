var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    // кол-во минислайдов
    slidesPerView: 4, 
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });