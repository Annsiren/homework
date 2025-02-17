const buttonOpen = document.querySelector('.btn-open');
const buttonClose = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');

//Моя очень простая реализация через свойство display

// function openModal() {
//   modal.style.display = 'flex';
// }

// function closeModal() {
//   modal.style.display = 'none';
// }

//Также сделала через добавление класса через visibility и opacity

// function openModal() {
//   modal.classList.add('modal--open');
// }

// function closeModal() {
//   modal.classList.remove('modal--open');
// }

// buttonOpen.addEventListener('click', openModal);
// buttonClose.addEventListener('click', closeModal);

//Ну и повторение за преподавателем, сама я бы так сходу не сделала, конечно

function openModal() {
  modal.classList.add('modal--open');
}

function closeModal() {
  modal.classList.remove('modal--open');
}

buttonOpen.addEventListener('click', openModal);

modal.addEventListener('click', event => {
  const target = event.target;
  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
    closeModal()
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
    closeModal()
  }
});