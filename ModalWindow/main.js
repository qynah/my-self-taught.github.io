'use strict';

const modal = document.querySelector('.modal');
const btnsShowModal = document.querySelectorAll('.show_modal');
const btnCloseModal = document.querySelector('.close_modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    console.log(i);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !(modal.classList.contains('hidden'))) {
        closeModal();
    }
})