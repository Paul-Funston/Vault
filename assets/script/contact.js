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
  removeValidSigns(formName, formEmail, formMessage, formPhone)

  if (anyEmpty(userName, userEmail, userMessage)) {
    valid = false;
    if (isEmpty(userName)) {
      addInvalidSign(formName)
    } else if (isEmpty(userMessage)) {
      addInvalidSign(formMessage)
    }
  } else {
    addValidSigns(formName, formMessage);
  }
   
   

  if (!isEmail(userEmail)) {
    addInvalidSign(formEmail);
    valid = false;
  } else {
    addValidSigns(formEmail);
  }

  if (!isEmpty(userPhone) && !isNaPhone(userPhone)) {
    addInvalidSign(formPhone);
    valid = false;
  } else {
    addValidSigns(formPhone);
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
    let target = item.parentNode;
    let targetSign = target.children[1];
    targetSign.classList.add('fa-solid');
    targetSign.classList.add('fa-check');
  });
}

function addInvalidSign(item) {
    let target = item.parentNode;
    let targetSign = target.children[1];
    targetSign.classList.add('fa-solid');
    targetSign.classList.add('fa-xmark');
  }



function swapValidSign(element) {
  let target = element.parentNode;
  let targetSign = target.children[1];

  // targetSign.classList.add('fa-solid')
  targetSign.classList.remove('fa-check')
  targetSign.classList.add('fa-xmark')
}

function removeValidSigns(...elements) {
  elements.forEach(element => {
    let target = element.parentNode;
    let targetSign = target.children[1];
    targetSign.classList.remove('fa-solid');
    targetSign.classList.remove('fa-check');
    targetSign.classList.remove('fa-xmark');
  })

  }



