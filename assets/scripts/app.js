'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./events')
// const grocerylistevents = require('./grocerylistevents')

$(() => {
  // $('.center').hide()
  $('#buttons').show()
  $('#change-password').hide()
  $('#sign-out-form').hide()
  $('#my-logout').hide()
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-form').on('submit', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  // $('#grocery-list-form').on('submit', userEvents.onGroceryListSubmit)
  $('#submit').on('click', userEvents.onListCreate)
  $('#show').on('click', userEvents.onShowAllList)
  $('#edit').on('click', userEvents.onListUpdate)
  $('#delete').on('click', userEvents.onListDelete)
})
