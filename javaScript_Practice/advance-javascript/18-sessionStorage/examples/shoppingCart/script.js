let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
// console.log(cart)
cart.push({
  id: 1,
  name: "laptop",
  quantity: 1,
});

sessionStorage.setItem("cart", JSON.stringify(cart));

// retrieving the cart
let storedCart = JSON.parse(sessionStorage.getItem("cart"));
console.log(storedCart);


