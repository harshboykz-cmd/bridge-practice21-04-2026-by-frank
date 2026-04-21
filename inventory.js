const product1 = {
  name: "indomie noodles",
  category: "food",
  price: 500,
  quantity: 8,
  minStockLevel: 10,
  discountRate: 0.15
};

const product2 = {
  name: "rice",
  category: "food",
  price: 1200,
  quantity: 20,
  minStockLevel: 15,
  discountRate: 0.1
};

// Q6: Product summary
console.log(`Product: ${product1.name} (${product1.category})
Price: ${product1.price} RWF | Stock: ${product1.quantity} units`);

// Q7: Product1 calculations
const product1TotalValue = product1.price * product1.quantity;
const product1Discount = product1.price * product1.discountRate;
const product1DiscountedPrice = product1.price - product1Discount;

console.log(`Total stock value: ${product1TotalValue}`);
console.log(`Discount amount per unit: ${product1Discount}`);
console.log(`Discounted price: ${product1DiscountedPrice}`);

// Q8: Stock status
if (product1.quantity === 0) {
  console.log(`${product1.name}: OUT OF STOCK — Reorder immediately.`);
} else if (product1.quantity < product1.minStockLevel) {
  console.log(`${product1.name}: LOW STOCK — ${product1.quantity} units remaining.`);
} else if (product1.quantity <= 50) {
  console.log(`${product1.name}: Healthy stock — ${product1.quantity} units.`);
} else {
  console.log(`${product1.name}: Well stocked — ${product1.quantity} units.`);
}

// Q9: Product2 calculations
const product2TotalValue = product2.price * product2.quantity;
const product2Discount = product2.price * product2.discountRate;
const product2DiscountedPrice = product2.price - product2Discount;

console.log(`\n${product2.name} Summary:`);
console.log(`Total stock value: ${product2TotalValue}`);
console.log(`Discount amount per unit: ${product2Discount}`);
console.log(`Discounted price: ${product2DiscountedPrice}`);

// Product2 stock status
if (product2.quantity === 0) {
  console.log(`${product2.name}: OUT OF STOCK — Reorder immediately.`);
} else if (product2.quantity < product2.minStockLevel) {
  console.log(`${product2.name}: LOW STOCK — ${product2.quantity} units remaining.`);
} else if (product2.quantity <= 50) {
  console.log(`${product2.name}: Healthy stock — ${product2.quantity} units.`);
} else {
  console.log(`${product2.name}: Well stocked — ${product2.quantity} units.`);
}

// Price comparison
if (product1.price < product2.price) {
  console.log(`${product1.name} is the budget pick. Price difference: ${product2.price - product1.price}`);
} else if (product2.price < product1.price) {
  console.log(`${product2.name} is the budget pick.`);
} else {
  console.log("Both products are the same price.");
}

// Q10: Alerts
if (product1.quantity === 0 || product2.quantity === 0) {
  let outOfStock = [];

  if (product1.quantity === 0) outOfStock.push(product1.name);
  if (product2.quantity === 0) outOfStock.push(product2.name);

  console.log(`URGENT: OUT OF STOCK — ${outOfStock.join(" & ")}`);
} 
else if (
  product1.quantity < product1.minStockLevel &&
  product2.quantity < product2.minStockLevel
) {
  console.log(`RESTOCK ALERT: Both ${product1.name} and ${product2.name} are below minimum stock levels.`);
} 
else if (
  (product1.price > 1500 && product1.quantity < product1.minStockLevel) ||
  (product2.price > 1500 && product2.quantity < product2.minStockLevel)
) {
  console.log("PRIORITY REORDER ALERT: High-value product is understocked.");
} 
else {
  console.log("Inventory status: all products OK.");
}

// Q11: Final report
const totalProducts = 2;
const combinedValue = product1TotalValue + product2TotalValue;

let mostExpensive;
if (product1.price > product2.price) {
  mostExpensive = product1;
} else if (product2.price > product1.price) {
  mostExpensive = product2;
} else {
  mostExpensive = { name: "Both products", price: product1.price };
}

let lowStockCount = 0;
if (product1.quantity < product1.minStockLevel) lowStockCount++;
if (product2.quantity < product2.minStockLevel) lowStockCount++;

console.log("\n================ INVENTORY REPORT ================");
console.log(`Total products: ${totalProducts}`);
console.log(`Combined inventory value: ${combinedValue}`);
console.log(`Most expensive product: ${mostExpensive.name} (${mostExpensive.price})`);
console.log(`Low-stock items: ${lowStockCount}`);
console.log("Insight: Restock low items first and promote slow-moving stock.");
console.log("==================================================");