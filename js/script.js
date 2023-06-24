// carosello swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, breakpoints: {
      200: { //mobile
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: { //tablet
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: { //notebook in su!
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }

  });


    




  