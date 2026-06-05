

// example
// You have product prices and want to add 10% tax.
// const prices = [100, 200, 300];

// const pricesWithTax = prices.map(price => price * 1.10);
// console.log(pricesWithTax);
// [110, 220, 330]


// example
// Simplified Internal Version (Conceptual)
Array.prototype.myMap = function(callback) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

// number array
const numbers = [1,2,3];

const squareNumbers = numbers.myMap((num)=> (num * num));

console.log(squareNumbers)