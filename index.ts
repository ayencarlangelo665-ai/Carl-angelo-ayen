const numberOne: number = 1;
const Letter: string = "Hello";
const isActive: boolean = true;
const name: string = "Carl";
const number: number[] = [1, 2, 3, 4, 5,];

function greet(person: string):

string {

    return `Hello, ${person}!`;
}

type IsString <T> = T extends string? "Yes" : "No";

type Test1 = IsString <string>;
type Test2 = IsString <number>;







console.log(numberOne);
console.log(Letter);
console.log(isActive);
console.log(name);
console.log(number);

console.log(greet(name));

//===================================================================
// Activity 2: TypeScript Basics
//===================================================================

// --------------------
// Part 1: Variables and Types
// --------------------

// 1. Declare itemName (string), price and quantity (numbers).
const itemName: string = "Burger";
const price: number = 150;
let quantity: number = 2;

// 2. Compute total and print it.
const total: number = price * quantity;
console.log(`Total: ₱${total}`);

// 3. Try quantity = "two". Why does TypeScript reject it?
// quantity = "two"; // ❌ Error: Type 'string' is not assignable to type 'number'.

// 4. Declare a string[] menu and a typed object { name: string; price: number }.
const menu: string[] = ["Burger", "Fries", "Juice"];
const menuItem: { name: string; price: number } = { name: "Fries", price: 50 };

// 5. Add let discount: number | null = null;
let discount: number | null = null;


// --------------------
// Part 2: Conditionals
// --------------------

const isStudent: boolean = true;

// 1. If isStudent is true, apply a 10% discount.
if (isStudent) {
    discount = total * 0.1;
}

// 2. Print "Small order", "Regular order", or "Big order".
if (total < 100) {
    console.log("Small order");
} else if (total >= 100 && total <= 299) {
    console.log("Regular order");
} else {
    console.log("Big order");
}

// 3. Rewrite the discount using a ternary ? :.
discount = isStudent ? total * 0.1 : 0;
console.log(`Discount: ₱${discount}`);


// --------------------
// Part 3: Loops
// --------------------

const cart = [
    { name: "Adobo", price: 60, qty: 2 },
    { name: "Juice", price: 25, qty: 1 },
];

// 1. Use for...of to print each item.
for (const item of cart) {
    console.log(`${item.name} - ₱${item.price}`);
}

// 2. Compute the cart subtotal with a loop.
let subtotal = 0;
for (const item of cart) {
    subtotal += item.price * item.qty;
}
console.log(`Subtotal: ₱${subtotal}`);

// 3. Use a while loop to count down from 5 to 1.
let counter = 5;
while (counter > 0) {
    console.log(counter);
    counter--;
}


// --------------------
// Part 4: Functions
// --------------------

// 1. getLineTotal(price: number, qty: number): number
function getLineTotal(price: number, qty: number): number {
    return price * qty;
}

// 2. applyDiscount(total: number, isStudent: boolean): number
function applyDiscount(total: number, isStudent: boolean): number {
    return isStudent ? total * 0.9 : total;
}

// 3. getCartTotal(cart) using getLineTotal
function getCartTotal(cart: { name: string; price: number; qty: number }[]): number {
    let total = 0;
    for (const item of cart) {
        total += getLineTotal(item.price, item.qty);
    }
    return total;
}

// 4. printReceipt(customer, cart, isStudent): void
function printReceipt(customer: string, cart: { name: string; price: number; qty: number }[], isStudent: boolean): void {
    console.log(`Receipt for ${customer}`);
    let total = 0;
    for (const item of cart) {
        const lineTotal = getLineTotal(item.price, item.qty);
        console.log(`${item.name} x${item.qty} - ₱${lineTotal}`);
        total += lineTotal;
    }
    console.log(`Subtotal: ₱${total}`);
    const finalTotal = applyDiscount(total, isStudent);
    console.log(`Final Total (after discount if student): ₱${finalTotal}`);
}

// Example usage:
printReceipt("Carl angelo", cart, true);





