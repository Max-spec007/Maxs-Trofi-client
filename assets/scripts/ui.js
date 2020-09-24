const store = require('./store')
const currentUser = require('./currentUser')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
  $('#my-login').show()
  $('#my-logout').hide()
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email + ' - Please scroll down to access your grocery list creator, no notepad needed! Remember to click Show after you Create, Edit or Delete. Happy Shopping!')
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
  $('#message').text('Sign in failed try again')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignOutSuccess = function (response) {
  $('#message').text('Thanks for signing out! ')
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
  $('#message').text('Sign out failed try again')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
  $('#my-login').hide()
  $('#my-logout').show()
}
const onChangePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onListCreateSuccess = function () {
  $('#message').text('Grocery list created!')
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

  $('form').trigger('reset')
}

const onListUpdateSuccess = function () {
  $('#message').text('Grocery list updated!')
}

const onListDeleteSuccess = function () {
  $('#message').text('Grocery list deleted!')
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
  onShowAllListSuccess,
  onListUpdateSuccess,
  onListDeleteSuccess,
  currentUser
}
