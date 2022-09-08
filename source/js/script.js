let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__nav-toggle');

navMain.classList.remove('main-nav--no-js')

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('main-header__nav-toggle--open');

  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close')
    navMain.classList.add('main-nav--open')

} else {
  navMain.classList.add('main-nav--close')
  navMain.classList.remove('main-nav--open')
  }
})
