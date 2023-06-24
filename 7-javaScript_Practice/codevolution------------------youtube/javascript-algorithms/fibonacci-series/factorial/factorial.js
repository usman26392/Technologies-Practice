
function factorialNumber(n) {
    if(n < 0) {
        return n;
    }
    else {
        // 4 * 3 * 2 * 1
        let resultFactorial = 1;
        for(let i = 2; i <= n; i++ ) {
            resultFactorial = resultFactorial * i;
        }
        return resultFactorial;
    }
}


console.log(factorialNumber(2))
console.log(factorialNumber(3))
console.log(factorialNumber(4))
console.log(factorialNumber(5))
console.log(factorialNumber(6))

