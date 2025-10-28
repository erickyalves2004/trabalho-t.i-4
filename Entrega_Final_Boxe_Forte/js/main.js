// Acessibilidade: controle de contraste e navegação por teclado
(function(){
  const html = document.documentElement;
  const contrastBtn = document.getElementById('contrast-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  // Alterna alto contraste
  contrastBtn.addEventListener('click', function(){
    const pressed = this.getAttribute('aria-pressed') === 'true';
    this.setAttribute('aria-pressed', String(!pressed));
    if(!pressed){
      html.setAttribute('data-contrast','high');
    } else {
      html.removeAttribute('data-contrast');
    }
  });

  // Toggle menu simples para mobile
  navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      navList.style.display = 'flex';
    } else {
      navList.style.display = 'none';
    }
  });

  // Form accessible submit
  const form = document.getElementById('contato-form');
  const formMsg = document.getElementById('form-msg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    formMsg.textContent = 'Mensagem enviada (simulada). Obrigado!';
    formMsg.classList.remove('sr-only');
    form.reset();
  });

  // Ensure focus outlines visible on keyboard navigation
  function handleFirstTab(e){
    if(e.key === 'Tab'){
      document.body.classList.add('show-focus');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
})();
