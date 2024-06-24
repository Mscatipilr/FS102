/*
Update the 'Apples' item to say 'Granny Smith Apples'
Remove 'Oat Milk' from the list
Add an item 'Kombucha'
Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
Add the class 'important' to the almonds item.
*/
const listItems = document.querySelectorAll('li');
const apples = listItems[1];

//console.log(apples);

apples.innerHTML = 'Granny Smith Apples';

listItems[3].remove();

const newItem = document.createElement('li');
newItem.innerHTML = "Kombucha";
const shopList = document.querySelector('ul');
shopList.appendChild(newItem);

shopList.innerHTML = '';

const newItems = ['protein bars', 'almonds', 'peanut butter'];

newItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    if (item === 'almonds') {
        li.innerHTML = '<b>' + item;
        li.classList.add('important');
    }
    shopList.appendChild(li);
});


console.log(shopList.outerHTML);