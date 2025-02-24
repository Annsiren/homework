(function () {
  document.addEventListener("click", burgerInit);

  function burgerInit(evt) {
    const target = evt.target;
    const burgerIcon = target.closest(".burger-icon");
    const burgerNavLink = target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  const buttonOpenModal = document.querySelector('.about__img-button');
  buttonOpenModal.addEventListener('click', (evt) => {
    evt.preventDefault()
    console.log('123')
    document.body.classList.add('body--opened-modal')
  })

  const modal = document.querySelector('.modal');
  modal.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('modal') || target.closest('.modal__cancel')) {
      document.body.classList.remove('body--opened-modal')
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') document.body.classList.remove('body--opened-modal')
  })
  }
)();
