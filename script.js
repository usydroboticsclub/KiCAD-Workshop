
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

  document.querySelectorAll('[data-download-gate]').forEach(gate => {
    const form = gate.querySelector('[data-download-gate-form]');
    const passwordInput = form?.elements.namedItem('password');
    const message = gate.querySelector('[data-download-gate-message]');
    const downloadLink = gate.querySelector('[data-protected-download]');
    const expectedPassword = gate.getAttribute('data-download-password');

    if (!(form instanceof HTMLFormElement) ||
        !(passwordInput instanceof HTMLInputElement) ||
        !(message instanceof HTMLElement) ||
        !(downloadLink instanceof HTMLAnchorElement) ||
        expectedPassword === null) {
      return;
    }

    form.addEventListener('submit', event => {
      event.preventDefault();

      if (passwordInput.value.trim() === expectedPassword) {
        downloadLink.hidden = false;
        message.textContent = 'Password accepted. Your download is ready.';
        passwordInput.value = '';
        downloadLink.focus();
      } else {
        message.textContent = 'That password is not correct. Please try again.';
        passwordInput.select();
      }
    });
  });
})();
