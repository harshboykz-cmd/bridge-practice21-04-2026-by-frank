// Urutonde rw'ibicuruzwa (sample data)
const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Phone", category: "electronics" },
  { name: "Shirt", category: "clothing" },
  { name: "Pants", category: "clothing" },
  { name: "Apple", category: "food" },
  { name: "Bread", category: "food" }
];

// Function filterByCategory
function filterByCategory(products, category) {
  return products.filter(product => product.category === category);
}

// 1. Electronics
const electronics = filterByCategory(products, "electronics");
console.log("Electronics:", electronics);

// 2. Clothing
const clothing = filterByCategory(products, "clothing");
console.log("Clothing:", clothing);

// 3. Food (print ONLY names)
const food = filterByCategory(products, "food");
const foodNames = food.map(item => item.name);
console.log("Food Names:", foodNames);