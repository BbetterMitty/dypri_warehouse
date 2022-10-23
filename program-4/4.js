const open = document.querySelector('.open');
const close = document.querySelector('.close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('change'));
close.addEventListener('click', () => container.classList.remove('change'));

