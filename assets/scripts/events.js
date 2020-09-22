
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

const onListCreate = function (event) {
  console.log('It worked!')
  event.preventDefault()
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  console.log(data)
  api.listCreate(data)
  // handle successul response
    .then(ui.onListCreateSuccess)
  // handle failed response
    .catch(ui.onListCreateFailure)
}

const onShowAllList = function (event) {
  event.preventDefault()
  // use getFormFields to get data from the form

  // send data in AJAX request to the API
  api.showAllList()
  // handle successul response
    .then(ui.onShowAllListSuccess)
  // handle failed response
    .catch(ui.onShowAllListFailure)
}

const onListUpdate = function (event) {
  console.log('It worked!', event.target)
  event.preventDefault()
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.listUpdate(data)
  // handle successul response
    .then(ui.onListUpdateSuccess)
  // handle failed response
    .catch(ui.onListUpdateFailure)
}

const onListDelete = function (event) {
  event.preventDefault()
  // use getFormFields to get data from the form
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.listDelete(data)
  // handle successul response
    .then(ui.onListDeleteSuccess)
  // handle failed response
    .catch(ui.onListDeleteFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onListCreate,
  onShowAllList,
  onListUpdate,
  onListDelete,
  store
}
