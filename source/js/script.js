'use strict';

const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');
const navigationElement = document.querySelector('.navigation');
const siteNavigation = document.querySelector('.site-navigation');
const pageBody = document.querySelector('.page__body');

navigationElement.classList.remove('navigation_nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('page-header_opened');
  navigationElement.classList.toggle('navigation_opened');
  pageBody.classList.toggle('scroll-hidden');
});

// Реализация якорей

const hideMenu = () => {
  pageHeader.classList.remove('page-header_opened');
  navigationElement.classList.remove('navigation_opened');
  pageBody.classList.remove('scroll-hidden');
};

const scrollTo = (elementClassToScroll) => {
  hideMenu();
  document.querySelector(elementClassToScroll).scrollIntoView({behavior: "smooth"})
}

siteNavigation.querySelector('#nav-item-about-us')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollTo('.facts');
  });

siteNavigation.querySelector('#nav-item-types-bike')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollTo('.gallery');
  });

siteNavigation.querySelector('#nav-item-promo-video')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollTo('.video');
  });

siteNavigation.querySelector('#nav-item-contacts')
  .addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollTo('.contacts');
  });
