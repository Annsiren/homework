// const burgerButton = document.querySelector('.burger-icon')
// console.log(burgerButton)
// const body = document.querySelector('.body')

// function toggleMenu() {
//   body.classList.toggle('body--opened-menu')
// }

// burgerButton.addEventListener('click', toggleMenu)

// Но всё оказалось не так-то просто...)))

(function() {
  document.addEventListener('click', burgerInit)

  function burgerInit(evt) {
    const target = evt.target;
    const burgerIcon = target.closest('.burger-icon');
    const burgerNavLink = target.closest('.nav__link');

if (!burgerIcon && !burgerNavLink) return
if (document.documentElement.clientWidth > 900) return

if (!document.body.classList.contains('body--opened-menu')) {
  document.body.classList.add('body--opened-menu')
} else {
  document.body.classList.remove('body--opened-menu')
}

}
})()