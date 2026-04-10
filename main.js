// Fade-in hero content on load
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.hero-content');
  const nav = document.querySelector('.nav');

  [nav, content].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
});
