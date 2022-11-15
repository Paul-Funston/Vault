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
const phoneRegexNA = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const formName = select('.user-name');
const formEmail = select('.email');
const formMessage = select('.message');
const formSubscribe = '';
const formButton = select('.send');
const formPhone = select('.phone');
const formInputs = selectAll('form div input');

console.log(formInputs);


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
  let count = 1;
  inputs.forEach(input => {
    if (isEmpty(input)) {
      result = true;
      console.log(`${count} is empty`);
    }
    count++;
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

function isFormValid () {
  let userName = formName.value.trim();
  let userEmail = formEmail.value.trim();
  let userMessage = formMessage.value.trim();
  let userPhone = formPhone.value.trim();
  let valid = true;


  removeValidIndicators(formName, formEmail, formMessage, formPhone)


  if (isEmpty(userName)) {
    valid = false
    addValidIndicator(formName, valid)
  } else {
    addValidIndicator(formName)
  }
   
  if (isEmpty(userMessage)) {
    valid = false
    addValidIndicator(formMessage, valid)
  } else {
    addValidIndicator(formMessage)
  }

  if (!isEmail(userEmail)) {
    valid = false;
    addValidIndicator(formEmail, valid);
  } else {
    addValidIndicator(formEmail);
  }

  if (!isEmpty(userPhone) && !isNaPhone(userPhone)) {
    valid = false;
    addValidIndicator(formPhone, valid)
  } else {
    addValidIndicator(formPhone);
  }

    console.log(valid);
}

onEvent('click', formButton, () => {
  isFormValid();
});


// Valid Signs

// formInputs.forEach(input => {
//   onEvent(focus, input, removeValidSign(input))
// })

// formInputs.forEach(input => {
//   onEvent(blur, input, addValidSign(input))
// })


function addValidSigns(...items) {
  items.forEach(item => {
    let indicator = findMatchingIndicator(item)
    indicator.classList.add('fa-solid');
    indicator.classList.add('fa-check');
  });
}

function addValidIndicator(node, valid = true) {
  let indicator = findMatchingIndicator(node)
  indicator.classList.add('fa-solid');
  if (valid)
    indicator.classList.add('fa-check');
  else 
    indicator.classList.add('fa-xmark');
}

function removeValidIndicators(...nodes) {
  nodes.forEach(node => {
    let indicator = findMatchingIndicator(node);
    indicator.classList.remove('fa-solid');
    indicator.classList.remove('fa-check');
    indicator.classList.remove('fa-xmark');
  });
}

function findMatchingIndicator(node) {
  let matchedIndicator = node.parentNode.children[1]
  return matchedIndicator
}

