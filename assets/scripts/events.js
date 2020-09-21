
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the events

  const form = event.target
  // Use getFormFields to get data from the form
  const data = getFormFields(form)

  // send data in AjAX request to the API
  api.signUp(data)
  // handle successful response
    .then(ui.onSignUpSuccess)
  // handle failed response
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target

  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signIn(data)
    // handle successul response
    .then(ui.onSignInSuccess)
    // handle failed response
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target

  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signOut(data)
    // handle successul response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.changePassword(data)
    // handle successul response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}

// const onFormActionButtons = function (event) {
//   event.preventDefault()
//   // get the form from the event
//   const form = event.target
//   // use getFormFields to get data from the form
//   const data = getFormFields(form)
//   // send data in AJAX request to the API
//   api.formActionButtons(data)
//     // handle successul response
//     .then(ui.onFormActionButtonsSuccess)
//     // handle failed response
//     .catch(ui.onFormActionButtonsFailure)
// }

const onGroceryListSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.groceryListSubmit(data)
  // handle successul response
    .then(ui.onGroceryListSubmitSuccess)
  // handle failed response
    .catch(ui.onGroceryListSubmitFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGroceryListSubmit,
  // onFormActionButtons,
  store
}
