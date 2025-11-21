
const modals = document.querySelectorAll('.modal');
const learnBtns = document.querySelectorAll('.learn-btn');
const closeBtns = document.querySelectorAll('.close-btn');

learnBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'flex';
  });
});

closeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });
});