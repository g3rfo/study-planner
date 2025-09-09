export const shakeAnimation = (el) => {
  if(!el) return;

  el.style.transform = 'translateX(-10px)';
  setTimeout(() => { el.style.transform = 'translateX(10px)' }, 50);
  setTimeout(() => { el.style.transform = 'translateX(-5px)' }, 100);
  setTimeout(() => { el.style.transform = 'translateX(0)' }, 150);
};