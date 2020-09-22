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
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#message').text('Please scroll down to access the list creator!')
  // $('#message').text('Please click new game')
  $('#sign-in-form').trigger('reset')
  $('#change-password').show()
  $('#history').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.container').show()
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
  $('.container').hide()
  $('#buttons').hide()
  $('#change-password').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
  $('#my-login').show()
  $('#my-logout').hide()
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

const onListCreateSuccess = function (response) {
  console.log(response)

  $('#listContent').html('')

  // loop through API response data
  response.groceries.forEach(function (grocery) {
    // build HTML element with data
    const groceryHTML = (`
      <table>
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

    // append bookHTML to our book-display element
    $('#listContent').append(groceryHTML)
  })
}

const onShowAllListSuccess = function (response) {
  console.log(response)

  let groceriesHTML = ''

  response.groceries.forEach(function (grocery) {
    const groceryHTML = (`
<table>
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
  console.log('groceriesHTML is', groceriesHTML)
  $('#listContent').html(groceriesHTML)

  $('form').trigger('reset')
}

const onListUpdateSuccess = function (response) {
  // add success message to our update-book-message element
  $('#update-list-message').html('You successfully updated the list')

  // empty out the book-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#list-display').html('Lists have changed! Click "Show" again to see all the lists.')

  // add class for success messaging
  $('#update-list-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#update-list-message').html('')
    $('#update-list-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onListDeleteSuccess = function () {
  // add success message to our delete-book-message element
  $('#delete-list-message').html('List successfully deleted!')

  // empty out the book-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  $('#list-display').html('Lists have changed! Click "Show" again to see all the lists')

  // add class for success messaging
  $('#delete-list-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-list-message').html('')
    $('#delete-list-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
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
  // onShowAllFailure
  // onNewGameSuccess,
  // onNewGameFailure,
  // onGamesHistorySuccess,
  // onGamesHistoryFailure,
}
