const buttonMain = document.querySelector('.main__read-more');
const hiddenText = document.querySelector('.main__text-hidden');
const readMoreText = document.querySelector('.main__read-more-text');
const readMoreImage = document.querySelector('.main__read-more-image');

function showMainText() {
  hiddenText.classList.toggle('main__text-hidden');
 if (hiddenText.classList.contains('main__text-hidden')) {
   readMoreImage.classList.toggle('main__read-more-text--open');
   readMoreText.textContent = 'Читать далее';
   return;
 }
  readMoreImage.classList.toggle('main__read-more-text--open');
  readMoreText.textContent = 'Скрыть';
}

buttonMain.addEventListener('click', showMainText);


