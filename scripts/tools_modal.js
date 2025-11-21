document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('toolModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = modal.querySelector('.close-btn');

  // Tool descriptions
const toolDescriptions = {
  "VS Code": "Visual Studio Code is a lightweight yet powerful code editor that supports multiple programming languages, extensions, and debugging tools, making development efficient and versatile.",
  ".NET / C#": ".NET is a robust framework that allows developers to build cross-platform applications using C#. It provides a rich ecosystem for web, desktop, and cloud applications.",
  "GitHub": "GitHub is a web-based platform for version control using Git. It enables collaboration, code sharing, project management, and continuous integration for developers.",
  "AWS Console": "The AWS Management Console is a web interface for managing Amazon Web Services resources, including EC2, S3, Lambda, IAM, and other cloud services, enabling deployment and monitoring of cloud applications."
};
6

  // Open modal
  const learnBtns = document.querySelectorAll('.learn-btn');
  learnBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      modalTitle.textContent = tool;
      modalDesc.textContent = toolDescriptions[tool];
      modal.classList.add('modal-show');
      document.body.style.overflow = 'hidden'; // lock scroll
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-show');
    document.body.style.overflow = '';
  });

  // Close modal by clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal-show');
      document.body.style.overflow = '';
    }
  });
});

