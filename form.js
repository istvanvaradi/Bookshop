//set up today and tomorrow

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()

function onChange() {
  let inputs = document.getElementsByClassName('form-control')
  let btn = document.getElementById('submit')
  let isValid = true

  for (var i = 0; i < inputs.length; i++) {
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

//individual valdation

const form = document.getElementById('survey-form')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const street = document.getElementById('street')
const number = document.getElementById('number')
const flatnum = document.getElementById('flatnum')
const startDate = document.getElementById('start')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validateInputs()
})

const setSucces = (element) => {
  const inputControl = element.parenElement
  const errorDisplay = inputControl('.error')

  errorDisplay.innerText = ' '
  inputControl.classList.add('succes')
  inputControl.classList.remove('error')
}
const setError = (element, message) => {
  const inputControl = element.parenElement
  const errorDisplay = inputControl.querySelector('error')

  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('succes')
}

const validateInputs = () => {
  const fNameValue = fName.value.trim()
  const streetValue = street.value.trim()
  const numberValue = number.value.trim()
  const flatnumValue = flatnum.value.trim()
  if (fNameValue === ' ') {
    setError(fName, 'Name is mandatory field made of US letters')
  } else {
    setSucces(fName)
  }
}
