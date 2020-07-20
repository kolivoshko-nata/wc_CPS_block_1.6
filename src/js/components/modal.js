const buttonClose = document.querySelector('.modal__button--close');
const buttonCall = document.querySelectorAll('.btn--call');
const buttonMessage = document.querySelectorAll('.btn--message');
const modal = document.querySelector('.modal');
const hideElements = document.querySelectorAll('.modal__input--hide');
const disabledWindow = document.querySelector('.container');
const hideTitleElements = document.querySelectorAll('.modal__title--hide');

let isOpen = false;


const hideTitle = (event) =>  {
  if (event.target.classList.contains('btn--message')) {
    for(let elem of hideTitleElements ) {
      elem.style.display = 'none'
    }
  } else {
    for(let elem of hideTitleElements ) {
      elem.style.display = 'block'
    }
  }
  disabledWindow.style.opacity = '.04';
  modal.style.display = 'block';
  modal.style.right = '0';
  document.body.style.overflow = 'hidden';
}


const openModal = (event) =>  {
  //перехватчик события для нажатия на заблюренную область
  isOpen = true;
  event.stopPropagation();

  if (event.target.classList.contains('btn--call')) {
    for(let elem of hideElements ) {
       elem.style.display = 'none'
    }
  }
  disabledWindow.style.opacity = '.04';
  modal.style.display = 'block';
  modal.style.right = '0';
  document.body.style.overflow = 'hidden';
}

const closeModal = ()=> {
  event.preventDefault();
  modal.style.right = '-500px';
  document.body.style.overflow = 'scroll';
setTimeout(()=>{
  for(let elem of hideElements ) {
    elem.style.display = 'block';
    disabledWindow.style.opacity = '1';
  }
},500);
}

for (let elem of buttonCall) {
  elem.addEventListener('click', openModal);
  elem.addEventListener('click', hideTitle);
}
for (let elem of buttonMessage) {
  elem.addEventListener('click', openModal);
  elem.addEventListener('click', hideTitle);
}

document.addEventListener('keyup', event=>{
  if (event.key === 'Escape') {
    closeModal()
  }
})

buttonClose.addEventListener('click', closeModal);

//закрытие при клике на заблюренную область
document.addEventListener('click', event=>{
  if(event.clientX < (document.documentElement.clientWidth - modal.clientWidth))
    if (isOpen) {
      closeModal();
    }
})


