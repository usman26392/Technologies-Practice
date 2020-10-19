
    let n1 = 10;
    let n2 = 20;
    let n3 = 30;


    if ((n1 > n2) && (n1 < n2)) {
        console.log("This is if statement!");
    }

    else if ((n2 < n3) && (n1 > n3) ) {
        console.log("This is else if statement 1");
    }

    else if ((n2 < n3) && (n2 > n1) ) {
        console.log("This is else if statement 2");
    }

    else {
        console.log("This is else statement");
    }



    // example -2
    let time = 11;

    if(time >= 11) {
        console.log("night");
    }

    else if ((time < 11) && (time > 3)) {
        console.log(evening);
    }

    else {
        console.log(morning);
    }

    // example-3 
    let percentageValue = 60;

    if((percentageValue >= 80) && (percentageValue <= 100) ) {
        console.log("grade A");
    }
    else if ( (percentageValue <= 79) && (percentageValue >= 60) ) {
        console.log("grade B")
    }
    else if ((percentageValue <= 59) && (percentageValue >= 50) ) {
        console.log("grade C");
    }
    else {
        console.log("grade Fail");
    }
