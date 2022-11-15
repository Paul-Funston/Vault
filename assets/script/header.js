'use strict';

/*
    MITT Tools and Automation
    Group project Paul Funston, George Edgar, Matthew Banuag
    
    VAULT website header menu
*/

// utility functions

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}


const openNav = select('.header-open-nav');
const closeNav = select('.header-close-nav');
const nav = select('nav');


onEvent('click', openNav, () => {
  openNav.classList.add('hidden');
  closeNav.classList.remove('hidden')
  nav.classList.add('visible');
}) 

onEvent('click', closeNav, () => {
  openNav.classList.remove('hidden');
  closeNav.classList.add('hidden')
  nav.classList.remove('visible');

}) 