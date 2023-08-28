const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});
