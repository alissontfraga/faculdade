const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item > a');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menuItems.forEach(link => {
  link.addEventListener('click', e => {
    const isMobile = window.innerWidth <= 768;
    const item = link.parentElement;
    const submenu = item.querySelector('.submenu');

    if (isMobile && submenu) {
      const isOpen = item.classList.contains('open');

      if (!isOpen) {
        e.preventDefault(); // só impede se for o primeiro clique
        // fecha outros
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('open'));
        item.classList.add('open');
      } else {
        // segundo clique: deixa rolar pro href
        item.classList.remove('open');
      }
    }
  });
});
