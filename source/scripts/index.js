/* в этот файл добавляет скрипты*/
const toggle = document.querySelector ('.logo-container__toggle');
const menu = document.querySelector ('.navigation__list');

toggle.onclick = function() {
  menu.classList.toggle ('navigation__list--hidden');
  toggle.classList.toggle ('logo-container__toggle--closed');
  toggle.classList.toggle ('logo-container__toggle--opened');
};
