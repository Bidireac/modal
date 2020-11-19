const modalBackground = document.querySelector('.modalBackground');
const activate = document.querySelector('.activate');
const modalClose = document.querySelector('.modalClose');

activate.addEventListener('click', () => {
    modalBackground.classList.add('activeModal');
});

modalClose.addEventListener('click', () => {
    modalBackground.classList.remove('activeModal');
});