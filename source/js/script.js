let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__nav-toggle');
let formMain = document.querySelector('.form');
let modalFail = document.querySelector('.modal--hidden-fail');
let modalSuccess = document.querySelector('.modal--hidden-success');
let modalFailbutton = document.querySelector('.modal-fail__button');
let modalSuccessbutton = document.querySelector('.modal-success__button');
let formBtn = document.querySelector('.form__button');


navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('main-header__nav-toggle--open');

  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');

} else {
  navMain.classList.add('main-nav--close');
  navMain.classList.remove('main-nav--open');
  }
});

formBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    const allNotEmpty = Array
    .from(document.querySelectorAll('.field-list__input--required'))
    .every(n => n.value);
  if (allNotEmpty) {
      modalSuccess.classList.add('modal--show');
      console.log("done");
  } else {
    modalFail.classList.add('modal--show');
    console.log("fill the required fields please");
  }
});

modalSuccessbutton.addEventListener('click', function() {
  modalSuccess.classList.remove('modal--show');
});

modalFailbutton.addEventListener('click', function() {
  modalFail.classList.remove('modal--show');
});
