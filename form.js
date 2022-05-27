//set up today and tomorrow

let d = new Date()
let today = d.toLocaleDateString('en-CA', { timeZone: 'Europe/Budapest' })
d.setDate(d.getDate() + 1)
let tomorrow = d.toLocaleDateString('en-CA', { timeZone: 'Europe/Budapest' })
//set date value//

var start = document.getElementById('start')
start.setAttribute('min', tomorrow)

console.log(tomorrow)

let inputs = document.getElementsByClassName('form-control')
let btn = document.getElementById('submit')

//individual checks

//First name
const nameFn = () => {
  let fName = document.getElementById('fName')
  const fNameValue = fName.value.trim()
  const parentname = fName.parentElement
  const error = parentname.querySelector('.error')
  if (fNameValue.length < 4 || fNameValue.match(/\d+/g)) {
    error.innerHTML = 'Error!minimum 4 characters, and no numbers'
    fName.style.border = '3px solid red'
  } else if (
    fNameValue.length >= 4 &&
    fNameValue.match(/[a-z]/i) &&
    !fNameValue.match(/\d+/g)
  ) {
    fName.style.border = '3px solid #09c372'
    error.innerHTML = ''
  }
}
//second NAme

const sname = () => {
  let lName = document.getElementById('lName')
  const lNameValue = lName.value.trim()
  const parentname = lName.parentElement
  const error = parentname.querySelector('.error')

  if (lNameValue.length < 4 || lNameValue.match(/\d+/g)) {
    error.innerHTML = 'invalid field !minimum 5 characters'
    lName.style.border = '3px solid red'
  } else if (
    lNameValue.length >= 5 &&
    lNameValue.match(/[a-z]/i) &&
    !lNameValue.match(/\d+/g)
  ) {
    lName.style.border = '3px solid #09c372'
    error.innerHTML = ''
  }
}

//street
const streetCheck = () => {
  const street = document.getElementById('street')
  const streetValue = street.value.trim()
  const parentStreet = street.parentElement
  const error = parentStreet.querySelector('.error')

  if (streetValue.length < 5) {
    error.innerHTML = 'invalid field !minimum 5 characters'
    street.style.border = '3px solid red'
  } else if (streetValue.length >= 5 && streetValue != ' ') {
    street.style.border = '3px solid #09c372'
    error.innerHTML = ''
  }
}

//house number
const houseNum = () => {
  const number = document.getElementById('housenumber')
  const numberValue = number.value.trim()
  const parentnum = number.parentElement
  const error = parentnum.querySelector('.error')

  if (
    numberValue.toString()[0] === '-' ||
    numberValue == '-' ||
    numberValue == 0
  ) {
    error.innerHTML = 'invalid field !cannot be less or equal than 0'
    number.style.border = '3px solid red'
  } else if (numberValue > 0) {
    number.style.border = '3px solid #09c372'
    error.innerHTML = ''
  }
}

const flatNum = () => {
  const flatNumk = document.getElementById('flatnum')
  const flatnvalue = flatNumk.value.trim()
  const parentnum = flatNumk.parentElement
  const error = parentnum.querySelector('.error')
  if (
    flatnvalue.toString()[0] === '-' ||
    flatnvalue == '-' ||
    flatnvalue == 0
  ) {
    error.innerHTML = 'invalid field!Cannot be less or equal than 0'
    flatNumk.style.border = '3px solid red'
  } else if (flatnvalue > 0) {
    flatNumk.style.border = '3px solid #09c372'
    error.innerHTML = ''
  }
}

function formCheck() {
  streetCheck
  let isValid = true
  for (var i = 0; i < inputs.length - 1; i++) {
    let changedInput = inputs[i]

    if (changedInput.value.trim() === '' || changedInput.value === null) {
      isValid = false
      break
    }
  }
  btn.disabled = !isValid

  if (inputs[0]) {
  }
}

//checkbox thing
function onlyOneCheckBox() {
  var checkboxgroup = document.querySelectorAll(`input[type="checkbox"]`)
  var limit = 2
  for (var i = 0; i < checkboxgroup.length; i++) {
    checkboxgroup[i].onclick = function () {
      var checkedcount = 0
      for (var i = 0; i < checkboxgroup.length; i++) {
        checkedcount += checkboxgroup[i].checked ? 1 : 0
      }
      if (checkedcount > limit) {
        alert('You can select maximum of ' + limit + ' checkbox.')
        this.checked = false
      }
    }
  }
}
