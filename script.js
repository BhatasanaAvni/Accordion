document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the current button
      const isActive = button.classList.contains('active');
      const content = button.nextElementSibling;

      // Close all accordions
      buttons.forEach(btn => {
        if (btn !== button) {
          btn.classList.remove('active');
          btn.nextElementSibling.classList.remove('show');
        }
      });

      // Toggle the clicked accordion
      if (isActive) {
        button.classList.remove('active');
        content.classList.remove('show');
      } else {
        button.classList.add('active');
        content.classList.add('show');
      }
    });
  });
});
