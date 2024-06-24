/*
Objective:
In this assignment, you will use your knowledge of JavaScript and browser storage (localStorage and sessionStorage) to create a simple 
shopping cart that allows users to add, remove, and display items. The cart should persist across browser sessions using localStorage.

 

Instructions:
Create an HTML file called cart.html with a simple structure that includes a form to add items to the cart and a button to display 
  the cart contents.
Create a file called cartApp.js and link it to cart.html.
In cartApp.js, write a script that does the following:
Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores 
  it in localStorage.
Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, 
  and then stores the updated cart back into localStorage.
Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the 
  given id from the cart, and then stores the updated cart back into localStorage.
Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
Create event listeners for the add item form and display cart button to call the respective functions.
*/

let initializeCart = () => {
  if (!localStorage.getItem('cart')){
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
let addItem = (itemName, itemPrice) => {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let id = cart.length + 1;
  let item = {
    itemName: itemName,
    itemPrice: itemPrice,
    itemID: id
  };
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}
let removeItem = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.filter(item => item.itemID !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
}
let displayCart = () => {
  let cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
}

initializeCart();
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let itemPrice = document.getElementById('itemPrice').value;
    addItem(itemName, itemPrice);
});
document.getElementById('displayCartButton').addEventListener('click', displayCart);