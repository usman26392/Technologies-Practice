function sumNumbers(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers(2, 4, 6));
