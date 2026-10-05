
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('kicad-theme');
  if (saved === 'dark') document.body.classList.add('dark');

  const updateToggle = () => {
    const isDark = document.body.classList.contains('dark');
    toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    toggle.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.querySelector('.theme-icon-moon').hidden = !isDark;
    toggle.querySelector('.theme-icon-sun').hidden = isDark;
  };

  if (toggle) {
    updateToggle();
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem(
        'kicad-theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
      updateToggle();
    });
  }

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.split('/').pop();
    if (target === current) link.classList.add('active');
  });
})();
