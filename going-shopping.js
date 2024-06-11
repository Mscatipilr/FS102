let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
        //console.log(shoppingList);
        
    shoppingList.push('fruit loops');
        //console.log(shoppingList);
    
    shoppingList[4] = 'fair trade coffee';
        //console.log(shoppingList);
    
    shoppingList.splice(2,2, 'rice','beans');
        //console.log(shoppingList);

let shoppingCart = [];

    shoppingCart.push(shoppingList[5]);
    shoppingList.pop ();
        //console.log(shoppingCart);
        //console.log(shoppingList);
    
    shoppingCart.push(shoppingList[0]);
    shoppingList.shift();
        //console.log(shoppingCart);
        //console.log(shoppingList);

    while (shoppingList.length > 0) {
        shoppingCart.push(shoppingList[0]);
        shoppingList.shift();
    }
    //console.log(shoppingCart);
    //console.log(shoppingList);

shoppingCart.sort();
    //console.log(shoppingCart);

shoppingCart.reverse();
    //console.log(shoppingCart);

console.log(shoppingCart.toString());

