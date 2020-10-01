const store = require('./store')
const currentUser = require('./currentUser')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email).fadeIn(6000).fadeOut(6000)
  $('#sign-up-form').trigger('reset')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again').fadeIn(6000).fadeOut(6000)
  $('#my-login').show()
  $('#my-logout').hide()
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email + ' - Please scroll down to access your grocery list creator, no notepad needed! Remember to click Show after you Create, Edit or Delete. Happy Shopping!').fadeIn(6000).fadeOut(6000)
  $('#sign-in-form').trigger('reset')
  $('#change-password').show()
  $('#history').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.center').show()
  $('.list').show()
  $('#buttons').show()
  $('#sign-out-form').show()
  $('#my-login').hide()
  $('#my-logout').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed try again').fadeIn(6000).fadeOut(6000)
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignOutSuccess = function (response) {
  $('#message').text('Thanks for signing out! ').fadeIn(6000).fadeOut(6000)
  $('#sign-out-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.center').hide()
  $('.list').hide()
  $('#buttons').hide()
  $('#change-password').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
  $('#my-login').show()
  $('#my-logout').hide()
  $('#listContent').empty()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed try again').fadeIn(6000).fadeOut(6000)
  $('#my-login').hide()
  $('#my-logout').show()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully').fadeIn(6000).fadeOut(6000)
  $('#change-password').trigger('reset')
  $('#my-login').hide()
  $('#my-logout').show()
}
const onChangePasswordFailure = function () {
  $('#message').text('Error on change password').fadeIn(6000).fadeOut(6000)
  $('#my-login').hide()
  $('#my-logout').show()
}

const onListCreateSuccess = function () {
  $('#message-create').text('Grocery list created!').fadeIn(6000).fadeOut(6000)
  $('#grocery-list-form').trigger('reset')
}

const onListCreateFailure = function () {
  $('#message-create').text('Grocery list was not created!').fadeIn(6000).fadeOut(6000)
  $('#grocery-list-form').trigger('reset')
}

const onShowAllListSuccess = function (response) {
  let groceriesHTML = ''

  response.groceries.forEach(function (grocery) {
    const groceryHTML = (`
<table class="list container">
  <thead>
      <tr>
        <th>Name Of Food</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Date of Purchase</th>
        <th>id</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td>${grocery.nameOfFood}</td>
        <td>${grocery.quantity}</td>
        <td>${grocery.category}</td>
        <td>${grocery.dateOfPurchase}</td>
        <td>${grocery._id}</td>
     </tr>
  </tbody>
</table>
      `)

    groceriesHTML += groceryHTML
  })
  $('#listContent').empty()
  $('#listContent').html(groceriesHTML)
  $('#message-show-all').text('Showing all lists!').fadeIn(6000).fadeOut(6000)
  $('form').trigger('reset')
}

const onShowAllListFailure = function () {
  $('#message-show-all').text('Not displaying all lists!').fadeIn(6000).fadeOut(6000)
  $('form').trigger('reset')
}

const onListUpdateSuccess = function () {
  $('#message-edit').text('Grocery list updated!').fadeIn(6000).fadeOut(6000)
  $('#edit').trigger('reset')
}

const onListUpdateFailure = function () {
  $('#message-edit').text('Grocery list did not update!').fadeIn(6000).fadeOut(6000)
  $('#edit').trigger('reset')
}

const onListDeleteSuccess = function () {
  $('#message-delete').text('Grocery list deleted!').fadeIn(6000).fadeOut(6000)
  $('#delete').trigger('reset')
}

const onListDeleteFailure = function () {
  $('#message-delete').text('Grocery list did not delete!').fadeIn(6000).fadeOut(6000)
  $('#delete').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onListCreateSuccess,
  onListCreateFailure,
  onShowAllListSuccess,
  onShowAllListFailure,
  onListUpdateSuccess,
  onListUpdateFailure,
  onListDeleteSuccess,
  onListDeleteFailure,
  currentUser
}
