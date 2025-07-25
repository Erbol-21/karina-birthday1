function replay() {
  const main = document.querySelector('.card');
  main.style.opacity = '0';
  setTimeout(() => {
    main.style.opacity = '1';
  }, 500);
}
