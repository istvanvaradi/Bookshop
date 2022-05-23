//set up today and tomorrow

var tomorrow = new Date()
tomorrow.setDate(new Date().getDate() + 1)
let touse = tomorrow.toISOString()

//set date value//

var start = document.getElementById('start')
start.setAttribute('min', `${touse.split('T')[0]}`)

//name
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
