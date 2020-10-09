

    let age = 28;

    if((age > 20) && age < 30 ) {
        console.log("Than this age range will belongs to me!");
    }

    if ((age > 20) && (age < 25)) {
        console.log("This will not belongs to me!");
    }

    if((age > 25) || (age < 28)) {
        console.log("This will be also!");
    }


    if( ! ((age < 25) || (age < 28)) ) {
        console.log("This will be also! from logical NOT operator");
    }


