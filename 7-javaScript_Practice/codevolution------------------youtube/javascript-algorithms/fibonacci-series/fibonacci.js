
function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    const fibArray = [0, 1];
    for(let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}


console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5));

// Big-O of this function O(n) 


