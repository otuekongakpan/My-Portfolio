document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('.modal');
  const learnBtns = document.querySelectorAll('.learn-btn');
  const closeBtns = document.querySelectorAll('.close-btn');

  learnBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].classList.add('modal-show');
    });
  });

  closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].classList.remove('modal-show');
    });
  });

  // Close modal only when clicking the overlay
  modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal-show');
      }
    });
  });
});
