

// example: countdown

function CountDown(num) {
    console.log(num);
    let newNumber = num - 1;
    if(newNumber > 0) {
        CountDown(newNumber);
    }
    console.log("lets play");
}

CountDown(4);