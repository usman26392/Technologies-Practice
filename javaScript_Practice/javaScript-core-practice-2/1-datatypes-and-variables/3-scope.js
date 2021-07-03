



var a = 10;


var add5 = function(num) {
    var b = 5;
    console.log(num + b);

    var add10 = function(num2) {
        console.log(num2 + a );
        // console.log(num2 + c ); // c is not accessible here.
    };

    add10(3);

    var add15 = function(num3) {
        var c = 15;
        console.log(num3 + c);
        // console.log(num + num3); // num is accessible here
        // add10(3);                // add10() accessible
    };

    add15(3);

};

add5(3);