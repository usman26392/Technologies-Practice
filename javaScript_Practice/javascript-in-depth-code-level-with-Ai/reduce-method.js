
// example:
const prices = [100, 200, 300];
const totalPrice = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total Price is", totalPrice);

//example:
const cart = [
  { name: "Trouser", qty: 2 },
  { name: "shirt", qty: 3 },
];

const customerTotalItems = cart.reduce((acc, item) => {
  return acc + item.qty;
}, 0);

console.log("Customer total items are", customerTotalItems);

// example:
const numbers = [10, 45, 32, 99, 21];
const max = numbers.reduce((acc, num) => {
//   return num > acc ? num : acc;
    if(num > acc) {
        return num;
    }
    return acc;
}, numbers[0]);

console.log(max); // 99


// example
const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Apple", category: "Food" }
];

const grouped = products.reduce((acc, product) => {
  // Check if the category already exists in the accumulator, 
  // if not create an array for it
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  // push the product into the corresponding category array 
  acc[product.category].push(product); 
  return acc;
}, {});

console.log(grouped);