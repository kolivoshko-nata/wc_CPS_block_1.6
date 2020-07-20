const sidebar = document.querySelector('.sidebar');
const buttonClose = document.querySelector('.btn--close');
const buttonOpen = document.querySelector('.btn--menu');
const content = document.querySelector('.content');

const hideSidebar = () => {
  sidebar.classList.add('sidebar--close');
  buttonOpen.style.zIndex = '1';
  content.style.opacity = 1;
  document.body.style.overflow = 'scroll';
}

const showSidebar = () => {
  sidebar.classList.remove('sidebar--close');
  buttonOpen.style.zIndex = '-1';
  content.style.opacity = .04;
  document.body.style.overflow = 'hidden';
}

document.addEventListener('keyup', event=>{
  if (event.key === 'Escape') {
    hideSidebar()
  }
})

//закрытие при клике на заблюренную область
content.addEventListener('click', event=>{
  if (event.clientX > sidebar.clientWidth && !sidebar.classList.contains('sidebar--close')) {
    hideSidebar()
  }
})

buttonClose.addEventListener('click', hideSidebar);
buttonOpen.addEventListener('click', showSidebar);


