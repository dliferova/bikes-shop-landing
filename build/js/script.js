'use strict';

const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');
const navigationElement = document.querySelector('.navigation');
const siteNavigation = document.querySelector('.site-navigation');

navigationElement.classList.remove('navigation_nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('page-header_opened');
  navigationElement.classList.toggle('navigation_opened')
});

// Реализация якорей

const hideMenu = () => {
  pageHeader.classList.remove('page-header_opened');
  navigationElement.classList.remove('navigation_opened');
};

siteNavigation.querySelector('#nav-item-about-us')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    hideMenu();
    document.querySelector('.facts').scrollIntoView({behavior: "smooth"})
  })

siteNavigation.querySelector('#nav-item-types-bike')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    hideMenu();
    document.querySelector('.gallery').scrollIntoView({behavior: "smooth"})
  })

siteNavigation.querySelector('#nav-item-promo-video')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    hideMenu();
    document.querySelector('.video').scrollIntoView({behavior: "smooth"})
  })

siteNavigation.querySelector('#nav-item-contacts')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    hideMenu();
    document.querySelector('.contacts').scrollIntoView({behavior: "smooth"})
  })
