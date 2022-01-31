  /* #Global
  ======================================================= */
  const body = document.querySelector('body');

  /* #Header
  ======================================================= */
  const header = document.querySelector('.header');
  const hamburgerBtn = document.querySelector('.header .hamburger');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', (e) => {
      header.classList.toggle('show');
      body.classList.toggle('no-scroll');
    });
  }

  /* #Banner Slider
      ======================================================= */
  if (document.querySelector('.banner .swiper')) {
    new Swiper('.banner .swiper', {
      loop: true,
      navigation: {
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
      },
      slidesPerView: 1
    });
  }