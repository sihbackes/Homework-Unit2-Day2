/* JS Exercises should go here */
// Write a JavaScript functionality to add a new link into the navbar
function addNewLink() {
  parentElement = document.querySelector(".nav");
  newlink = document.createElement("span");
  newlink.appendChild(document.createTextNode("New Link"));
  parentElement.appendChild(newlink);
}
// Write a JavaScript functionality to change the color of the main heading title
function changeTitleColor() {
  title = document.querySelector("h1");
  title.style.backgroundColor = "pink";
}
// Write a JavaScript functionality to change the background of the jumbotron
function changeBackgroundColor() {
  background = document.querySelector(".jumbotron");
  background.style.backgroundColor = "yellow";
}
// Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere” section in the aside element. It should happen when the page loads, automatically

// Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post
// Write a JavaScript functionality to add a new Blog Post (div with title and text)
// Write a JavaScript functionality to remove the last Blog Post when the user clicks on the "Older" button

// Write a JavaScript functionality that will create an alert with the name of the author every time the user hovers the mouse on an author's name
// EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, upon clicking on their “Continue reading” link
