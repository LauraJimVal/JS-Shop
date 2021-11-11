// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++){ // Haciendo un for para recorrer el array products
        console.log(id); // Ver por consola el id del producto seleccionado
    }
    // 2. Add found product to the cartList array
    id = id - 1; // operación para que se añada el producto correcto al cartList
    cartList.push(products[id]); // añadiendo el producto al array cartList
    console.log(cartList.length); // verificando la longitud del array cartList
    console.log(cartList); // ver por consola el array cartList con los productos seleccionados

}

// Exercise 2
function cleanCart() {
    cartList.length = 0; // reseteando a 0 el array cartList
    console.log(cartList); // ver por consola el array cartList 
}


// Exercise 3
function calculateSubtotals() {

    let subtotalGrocery = 0; // inicializa la variable subtotalGrocery
    let subtotalBeauty = 0; // inicializa la variable subtotalBeauty
    let subtotalClothes = 0; // inicializa la variable subtotalClothes
    // 1. Create a for loop on the "cartList" array 
    for (let i = 0; i < cartList.length; i++){ // 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if (cartList[i].type === "grocery"){ 
            subtotalGrocery = subtotalGrocery + cartList[i].price; // el precio se guarda en la variable subtotalGrocery para ir sumando los precios
            //console.log("grocery"); // enseña por consola que clase es
            //console.log(subtotalGrocery); // enseña por consola el total de la suma de los productos

        }else if(cartList[i].type === "beauty"){
            subtotalBeauty = subtotalBeauty + cartList[i].price; //el precio se guarda en la variable subtotalBeauty para ir sumando los precios
            //console.log("beauty"); // enseña por consola que clase es
            //console.log(subtotalBeauty); // enseña por consola el total de la suma de los productos

        }else if(cartList[i].type === "clothes"){
            subtotalClothes = subtotalClothes + cartList[i].price; //el precio se guarda en la variable subtotalClothes para ir sumando los precios
            //console.log("clothes"); // enseña por consola que clase es
            //console.log(subtotalClothes); // enseña por consola el total de la suma de los productos
        }
    }
    // Creando el objeto subtotals para almacenar los totales de cada categoría
    var subtotals = {
        Grocery: subtotalGrocery,
        Beauty: subtotalBeauty,
        Clothes: subtotalClothes
        };

        console.log(subtotals); // muestra por consola el objeto subtotals
    
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
