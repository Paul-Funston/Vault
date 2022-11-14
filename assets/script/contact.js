'use strict';

/*
    MITT Tools and Automation
    Group project Paul Funston, George Edgar, Matthew Banuag
    
    VAULT website
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


const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const phoneRegexNA = /^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/;
const formName = '';
const formEmail = '';
const formMessage = '';
const formSubscribe = '';
const formButton = '';
const formPhone = '';


function displayValid (element, boolean = false) { 
  element 
}

function isEmpty() {
  
}
function validate () {
  let userName = formName.trim();
  let userEmail = formEmail.trim();
  let userMessage = formMessage.trim();
  let wantsSubscribe = formSubscribe.checked;
  let userPhone = fromPhone.trim();



}
