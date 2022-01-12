//declare the variables for the one element
//save the variable into the object it is going to return
let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

//Add event and function that you want to run when the event happens to the addEventListener
//Adding an event listener to a particular element makes only the element react to the event and not the entire site/app
ourForm.addEventListener("submit", (e) => {
  //By default JS sends data somewhere when submit is used eg a database
  //to prevent the data from being sent elsewhere, other than to the current browser page, we use the preventDefault function
  //e is the parameter to which the addEventListener passes info about an event
  e.preventDefault();
  //When the user enters input we want the input to be displayed below on the Need to do
  createItem(ourField.value);
});

//This function is created to print out a users input in the text field
//x is the parameter that is passed in the above event, x is the value entered
function createItem(x) {
  //Deletes only the item that is clicked against
  let ourHTML = `<li>
    ${x} <button onclick = "deleteItem(this)">Delete</button>
  </li>`;
  //gets added to the end of our list as a bulleted item
  // ourHTML is the x above
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  ourField.value = "";
  //The text field automatically gets selected or focused
  //This takes the cursor back into the input field without having to click in it to type again
  ourField.focus();
}

//This adds events to a future event which is delete
//Initially when the app is run first time there are no items to delete
function deleteItem(elementToDelete) {
  //This gets to delete the entire bullet element
  elementToDelete.parentElement.remove();
}
