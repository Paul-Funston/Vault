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
const formName = select('.name');
const formEmail = select('.email');
const formMessage = select('.message');
const formSubscribe = '';
const formButton = '';
const formPhone = '';
const formInputs = selectAll('form input');


// function displayValid (element, boolean = false) { 
//   element 
// }

function isEmpty(input) {
  if (input.length === 0 )
    return true
  return false
}

function anyEmpty(...inputs) {
  let result = false;
  inputs.forEach(input => {
    if (isEmpty(input))
      result = true;
  })
  return result
}

function isEmail(input) {
  if (emailRegex.test(input)) {
    return true
  }
  return false
}

function isNaPhone(input) {
  if (phoneRegexNA.test(input)) {
    return true
  }
  return false
}

function validate () {
  let userName = formName.value.trim();
  let userEmail = formEmail.value.trim();
  let userMessage = formMessage.value.trim();
  let userPhone = fromPhone.value.trim();

  if (anyEmpty(userName, userEmail, userMessage))
    return false

  

}

