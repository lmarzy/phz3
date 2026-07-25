const modal = document.querySelector('.contact-modal');
const panel = modal?.querySelector('.modal-panel');
const openButtons = document.querySelectorAll('[data-contact-open]');
const closeButtons = document.querySelectorAll('[data-contact-close]');
let returnFocus;

function openContact(event) {
  event?.preventDefault();
  returnFocus = document.activeElement;
  modal?.classList.add('is-open');
  modal?.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  window.setTimeout(() => modal?.querySelector('input[name="name"]')?.focus(), 50);
}

function closeContact() {
  modal?.classList.remove('is-open');
  modal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  returnFocus?.focus();
}

openButtons.forEach((button) => button.addEventListener('click', openContact));
closeButtons.forEach((button) => button.addEventListener('click', closeContact));

document.addEventListener('keydown', (event) => {
  if (!modal?.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeContact();
  if (event.key !== 'Tab') return;
  const focusable = [...panel.querySelectorAll('button, input, select, textarea, a[href]')].filter((item) => !item.disabled);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
