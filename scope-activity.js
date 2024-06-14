/*Look at the following code example. After each step, run the program and see how the output changes.


 

Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.

Log the values of a and b in the inner function.

Update the inner function to take two parameters named a and b.

Pass a and b in as arguments when you execute inner().

Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).

Inside the inner function, update a property of the b object.*/

function outer(){
    let a = 'string';
    console.log(a);
    let b = {
        object: 'this is a value in an object',
        objectAttribute: 'this is an attribute of the object'
    }
    console.log(b);
  
    function inner(a, b) {
     console.log(a);
     console.log(b);
     let a = 'new value a';
     let b = {
        objectB: 'new value b',
        other: 'other thing b'
     }
     console.log(a);
     console.log(b);
     b.other = 'update';
    }
  
    inner(a, b);
    console.log(a);
    console.log(b);
  }
  
  outer();