console.info('is changeTheme.js');

import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';

const Theme = {
  LIGHT: 'light theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  switcher: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

refs.menuList.innerHTML = createMenuMarkup(menu);

refs.switcher.addEventListener('change', changeTheme);
function changeTheme(e) {

}
