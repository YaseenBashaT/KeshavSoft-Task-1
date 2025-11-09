// Bootstrap custom form validation + smooth UX enhancements
(() => {
  'use strict';

  // Form validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Sticky nav shadow on scroll + back-to-top
  const body = document.body;
  const backToTop = document.querySelector('.back-to-top');
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    body.classList.toggle('scrolled', y > 8);
    if (backToTop){
      if (y > 300) backToTop.classList.add('show'); else backToTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop){
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Close offcanvas after clicking a link (for smooth navigation on mobile)
  const navDrawer = document.getElementById('navDrawer');
  if (navDrawer){
    navDrawer.addEventListener('click', (e) => {
      const link = e.target.closest('a.nav-link, a.dropdown-item');
      if (link && window.bootstrap) {
        const offcanvas = bootstrap.Offcanvas.getInstance(navDrawer) || new bootstrap.Offcanvas(navDrawer);
        offcanvas.hide();
      }
    });
  }
})();
