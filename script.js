document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Theme toggle
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  
    // Form submission
    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      response.textContent = 'Mensagem enviada com sucesso!';
      form.reset();
    });
  });
  