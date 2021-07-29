import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';

(function () {

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const refs = {
    menuList: document.querySelector('.js-menu'),
    switcher: document.querySelector('.theme-switch__toggle'),
    body: document.body,
  };

  refs.menuList.innerHTML = createMenuMarkup(menu);

  refs.switcher.addEventListener('change', changeTheme);

  function toggleTheme(add, rm) {
    refs.body.classList.replace(rm, add);
    localStorage.setItem('theme', add)
  };

  function changeTheme({ target: { checked } }) {
    checked
      ? toggleTheme(Theme.DARK, Theme.LIGHT)
      : toggleTheme(Theme.LIGHT, Theme.DARK);
  };

  refs.body.classList.add(localStorage.getItem('theme',)
    ? localStorage.getItem('theme',)
    : Theme.LIGHT);
  refs.switcher.checked = localStorage.getItem('theme') === Theme.DARK;

})();
