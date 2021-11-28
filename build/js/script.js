'use strict';

const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');
const navigationElement = document.querySelector('.navigation');

navigationElement.classList.remove('navigation_nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('page-header_opened');
  navigationElement.classList.toggle('navigation_opened')
});
