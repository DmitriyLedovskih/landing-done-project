const headerRow = document.querySelector('.header__row');
const headerLogo = headerRow.querySelector('.header__logo');
const headerBtn = headerRow.querySelector('.header__right-btn');
const headerPhone = headerRow.querySelector('.header__right-phone');
const headerUser = headerRow.querySelector('.header__right-user');
const headerIcon = headerRow.querySelector('.header__right-icon');
const headerBurger = headerRow.querySelector('.header__burger');
const headerBurgerLine = headerRow.querySelector('.header__burger-line');
const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const introRow = document.querySelector('.intro__row');
const introProjects = document.querySelector('.intro__projects');
const introProject = introProjects.querySelectorAll('.intro__project');
const introContactPhone = document.querySelector('.intro__contact-phone');
const introContactText = document.querySelector('.intro__contact-text');
const introContactBtn = document.querySelector('.intro__contact-btn');
const modals = document.querySelectorAll('[data-modal]');
const modalBtns = document.querySelectorAll('[data-modal-btn]');
const popups = document.querySelectorAll('[data-popup]');
const popupBtns = document.querySelectorAll('[data-popup-btn]');
const compositionCards = document.querySelectorAll('.composition-project__card');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    headerRow.classList.add('header__row_active');
    headerLogo.classList.add('header__logo_active');
    headerBtn.classList.add('header__right-btn_active');
    headerPhone.classList.add('header__right-phone_active');
    headerUser.classList.add('header__right-user_active');
    headerIcon.classList.add('header__right-icon_active');
    headerBurger.classList.add('header__burger_active');
    headerBurgerLine.classList.add('header__burger-line_active');
    introContactPhone.classList.add('intro__contact-phone_fixed');
    introContactText.classList.add('intro__contact-text_hide');
    introContactBtn.classList.add('intro__contact-btn_hide');
  } else {
    headerRow.classList.remove('header__row_active');
    headerLogo.classList.remove('header__logo_active');
    headerBtn.classList.remove('header__right-btn_active');
    headerPhone.classList.remove('header__right-phone_active');
    headerUser.classList.remove('header__right-user_active');
    headerIcon.classList.remove('header__right-icon_active');
    headerBurger.classList.remove('header__burger_active');
    headerBurgerLine.classList.remove('header__burger-line_active');
    introContactPhone.classList.remove('intro__contact-phone_fixed');
    introContactText.classList.remove('intro__contact-text_hide');
    introContactBtn.classList.remove('intro__contact-btn_hide');
  }
});

introProject.forEach(item => {
  item.addEventListener('click', () => {
    introRow.classList.remove('intro__row_type_trade-storage');
    introRow.classList.remove('intro__row_type_village');
    introRow.classList.remove('intro__row_type_services');
    if (item.getAttribute('data-project') === 'village') {
      introRow.classList.add('intro__row_type_village');
    } else if (item.getAttribute('data-project') === 'trade-storage') {
      introRow.classList.add('intro__row_type_trade-storage');
    } else {
      introRow.classList.add('intro__row_type_services');
    }
  });
});

// burger.addEventListener('click', () => {
//   burger.classList.toggle('burger_opened');
//   burgerLine.classList.toggle('burger__line_hide');
// });

const openModal = (element) => {
  document.body.style.overflow = 'hidden';
  element.classList.add('modal--opened');
  element.querySelector('.modal__body').classList.add('modal__body--opened');
}

const closeModal = (element) => {
  document.body.style.overflow = null;
  element.classList.remove('modal--opened');
  element.querySelector('.modal__body').classList.remove('modal__body--opened');
}

const forEachModal = () => {
  modals.forEach(element => {
    modalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (element.getAttribute('data-modal') === btn.getAttribute('data-modal-btn')) {
          openModal(element);
        }
      });
    });

    element.querySelector('.modal__close').addEventListener('click', () => {
      closeModal(element);
    });

    element.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        closeModal(element);
      }
    });
  });
}

forEachModal();

compositionCards.forEach(card => {
  const openAndCloseBtn = card.querySelector('.composition-project__btn-open');
  const body = card.querySelector('.composition-project__body');
  const plusIcon = openAndCloseBtn.querySelector('.composition-project__btn-plus');
  const minusIcon = openAndCloseBtn.querySelector('.composition-project__btn-minus');
  body.dataset.hidden = 'true';
  body.style.maxHeight = '0px';
  openAndCloseBtn.addEventListener('click', () => {
    if (plusIcon.classList.contains('hidden')) {
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
    } else {
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
    }
    if (body.dataset.hidden === 'true') {
      body.dataset.hidden = 'false';
      body.style.maxHeight = `${body.scrollHeight}px`;
    } else {
      body.dataset.hidden = 'true';
      body.style.maxHeight = '0px';
    }
  });
});
