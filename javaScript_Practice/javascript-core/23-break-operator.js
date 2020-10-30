

// break operator
/*
let count = 1;
while (count <= 10) {
    console.log("counter "+ count);

    if(count === 5) {
        console.log("stoped while loop at 5 count!");
        break;
    }
    else count++;
} */


// continue operator
for(let a = 1; a <= 10; a++) {
    console.log("This is inside the for loop!")
    if(a == 3) {
        console.log("This statement inside the if ");
        continue;
    }
}

