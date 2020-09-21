// 'use strict'
//
//
// let selectedRow = null
//
// const onFormSubmit = function (event) {
//     if (validate()) {
//     let formData = readFormData();
//     if (selectedRow == null)
//       insertNewRecord(formData);
//     else
//     {updateRecord(formData);
//     resetForm();
//   }
// }

// let selectedRow = null
//
// const onFormSubmit = function () {
//   if (validate()) {
//     const formData = readFormData()
//     if (selectedRow == null) {
//       insertNewRecord(formData)
//     } else {
//       updateRecord(formData)
//     }
//     resetForm()
//   }
// }
//
// const readFormData = function () {
//   const formData = {}
//   formData.nameOfFood = document.getElementById('nameOfFood').value
//   formData.quantity = document.getElementById('quantity').value
//   formData.category = document.getElementById('category').value
//   formData.dateOfPurchase = document.getElementById('dateOfPurchase').value
//   return formData
// }
//
// function insertNewRecord (data) {
//   const table = document.getElementById('groceryList').getElementsByTagName('tbody')[0]
//   const newRow = table.insertRow(table.length)
//   cell1 = newRow.insertCell(0)
//   cell1.innerHTML = data.nameOfFood
//   cell2 = newRow.insertCell(1)
//   cell2.innerHTML = data.quantity
//   cell3 = newRow.insertCell(2)
//   cell3.innerHTML = data.category
//   cell4 = newRow.insertCell(3)
//   cell4.innerHTML = data.dateOfPurchase
//   cell4 = newRow.insertCell(4)
//   cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`
// }
//
// const resetForm = function () {
//   document.getElementById('nameOfFood').value = ''
//   document.getElementById('quantity').value = ''
//   document.getElementById('category').value = ''
//   document.getElementById('dateOfPurchase').value = ''
//   selectedRow = null
// }
//
// function onEdit (td) {
//   selectedRow = td.parentElement.parentElement
//   document.getElementById('nameOfFood').value = selectedRow.cells[0].innerHTML
//   document.getElementById('quantity').value = selectedRow.cells[1].innerHTML
//   document.getElementById('category').value = selectedRow.cells[2].innerHTML
//   document.getElementById('dateOfPurchase').value = selectedRow.cells[3].innerHTML
// }
//
// function updateRecord (formData) {
//   selectedRow.cells[0].innerHTML = formData.nameOfFood
//   selectedRow.cells[1].innerHTML = formData.quantity
//   selectedRow.cells[2].innerHTML = formData.category
//   selectedRow.cells[3].innerHTML = formData.dateOfPurchase
// }
//
// function onDelete (td) {
//   if (confirm('Are you sure to delete this record ?')) {
//     row = td.parentElement.parentElement
//     document.getElementById('groceryList').deleteRow(row.rowIndex)
//     resetForm()
//   }
// }
// function validate () {
//   isValid = true
//   if (document.getElementById('nameOfFood').value === '') {
//     isValid = false
//     document.getElementById('nameOfFoodValidationError').groceryList.remove('hide')
//   } else {
//     isValid = true
//     if (!document.getElementById('nameOfFoodValidationError').groceryList.contains('hide'))
//       document.getElementById('nameOfFoodValidationError').groceryList.add('hide')
//   }
//   return isValid
// }

// module.exports = {
//   onFormSubmit,
//   readFormData,
//   insertNewRecord,
//   resetForm,
//   onEdit,
//   updateRecord,
//   onDelete,
//   validate
// }
