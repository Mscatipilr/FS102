/*
Get the header element
Get all the section elements
Get the section element with class="current"
Get the section that comes after the current section
Get the h2 node from the section before the 'current' section
Get the div that contains the section that has an h2 with a class of 'highlight'
Get all the sections that contain an H2 (using a single statement);
 

 

Please console log each of these on a separate line when submitting your code. Hint: It might shorten your code if those were all in variables.*/
const header = document.querySelector('header');
console.log(header);

const sections = document.querySelectorAll('section');
console.log(sections);

const sectCurrent = document.querySelector('.current');
console.log(sectCurrent);

const afterCurSect = sectCurrent.nextElementSibling;
console.log(afterCurSect);

const h2prevCurSect = sectCurrent.previousElementSibling.children[0];
console.log(h2prevCurSect);

const div = sectCurrent.parentElement;
console.log(div);

const allH2 = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement});
console.log(allH2);