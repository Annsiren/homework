(function () {

  // Бургер

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

  //Модальное

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

  //Табы

  const tabControls = document.querySelector('.tab-controls');

  tabControls.addEventListener('click', ToggleTab);

  function ToggleTab(evt) {

    const tabControl = evt.target.closest('.tab-controls__link');

    if (!tabControl) return
    evt.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector('.tab-controls__link--active');
    const activeContent = document.querySelector('.tab-content--show');

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }
    
    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show');

  }

  //Аккордеон

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(elem => {
    elem.addEventListener('click', (evt) => {
      const accordionControl = evt.target.closest('.accordion-list__control');
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const accordionItems = elem.querySelectorAll('.accordion-list__item')

      accordionItems.forEach(elem => {
        if (elem !== accordionItem) {
          elem.classList.remove('accordion-list__item--opened');
          elem.querySelector('.accordion-list__content').style.maxHeight = null;
        }
      })
      
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

    })
  })

  //Слайдер-галерея

  const swiper = new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.5,
  
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }
  
  });

})();