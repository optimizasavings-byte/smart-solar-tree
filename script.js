/* Menu acessível: teclado, navegação e Escape. */
document.body.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
toggle.hidden = false;
function closeMenu(returnFocus = false) {
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
// Animações leves, respeitando as preferências de acessibilidade.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) document.querySelectorAll('.reveal-ready').forEach(element => element.classList.add('is-visible'));
  });
}
const video = document.querySelector('#project-video');
function videoError() { document.querySelector('#video-error').hidden = false; }
video.addEventListener('error', videoError);
video.querySelector('source').addEventListener('error', videoError);
if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) videoError();
// POST nativo sem JS; AJAX com feedback na própria página.
// Nenhum dado pessoal é salvo localmente. Sucesso exige resposta positiva do serviço.
const form = document.querySelector('#formulario');
const submit = form.querySelector('button[type="submit"]');
const status = document.querySelector('#form-status');
let sending = false;
function feedback(message, error = false) {
  status.textContent = message;
  status.classList.toggle('error', error);
  status.hidden = false;
  status.focus();
}
form.addEventListener('input', event => {
  if (event.target.setCustomValidity) event.target.setCustomValidity('');
});
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending || form.elements._honey.value) return;
  for (const field of form.querySelectorAll('input[required]:not([type="checkbox"])')) {
    field.value = field.value.trim();
    field.setCustomValidity(field.value ? '' : 'Preencha este campo.');
  }
  if (!form.reportValidity()) return;
  sending = true;
  submit.disabled = true;
  form.setAttribute('aria-busy', 'true');
  submit.firstElementChild.textContent = 'Enviando…';
  status.hidden = true;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch('https://formsubmit.co/ajax/optimizasavings@gmail.com', {
      method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !(result.success === true || result.success === 'true')) throw new Error('Submission rejected');
    form.reset();
    feedback('Obrigado pelo interesse na Smart Solar Tree. Recebemos seu contato e retornaremos em breve.');
  } catch (error) {
    feedback(error.name === 'AbortError'
      ? 'O envio demorou mais que o esperado. Não foi possível confirmar o recebimento. Tente novamente em instantes ou escreva para optimizasavings@gmail.com.'
      : 'Não foi possível confirmar o envio. Seus campos foram preservados. Verifique sua conexão e tente novamente ou escreva para optimizasavings@gmail.com.', true);
  } finally {
    clearTimeout(timeout);
    sending = false;
    submit.disabled = false;
    form.removeAttribute('aria-busy');
    submit.firstElementChild.textContent = 'Enviar contato';
  }
});
