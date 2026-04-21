// // Q1.
// variables
let productName = "indomie noodles";
let category = "food";
let price = 500;
let quantity=20;
let inStock = true;
//to print
console.log(productName);
console.log(category);
console.log(price);
console.log(inStock);
console.log(quantity);
console.log(typeof price);

// Q2.

// Line 1: product label
console.log(`${productName} (${category}) — ${price} RWF per unit`);

// Line 2: stock se
console.log(`${quantity} units in stock. In stock: ${inStock}`);

// Line 3: total stock value
console.log(`Total value: ${price * quantity} RWF`);

// Q3.
// 1. Is the price up 1000 RWF
console.log(price > 1000);

// 2. Is the quantity exactly 20
console.log(quantity === 20);

// 3. Is the quantity not equal to 0?
console.log(quantity !== 0);

// 4. Remainder 
console.log((price * quantity) % 3);

// 5. Price including 10% tax
console.log(price + (price * 0.10));
//Q4.
if (quantity === 0) {
  console.log("CRITICAL: Out of stock. Reorder immediately.");
} else if (quantity < 10) {
  console.log("WARNING: Low stock. Consider reordering.");
} else if (quantity <= 50) {
  console.log("OK: Healthy stock level.");
} else {
  console.log("FULL: Warehouse well stocked.");
}

//Q5.
const product = {
  name: "Indomie Noodles",
  category: "food",
  price: 500,
  quantity: 20,
  inStock: true
};

console.log(product.name);
console.log(product.category);
console.log(product.price);
console.log(product.quantity);
console.log(product.inStock);

// 3: Formatted summary 
console.log(`The product ${product.name} belongs to ${product.category}, costs ${product.price} RWF, and we have ${product.quantity} units in stock. Availability: ${product.inStock}.`);

// 4:  20% discount
product.price = product.price * 0.8;

// 5: Print new price
console.log(`New discounted price: ${product.price} RWF`);
//worked by KUZWA NGANIKA FRANK L4SWD COBANGA