




    // var numbers = ['One', 'Two', 'Three', 'Four', 'Five'];
    //     numbers.forEach(function(itemValue, indexNumber) {
    //     console.log('Item at index ' + indexNumber + ' has the value ' + itemValue);
    // });


/*
    let randomNumber = [1,2,3,4,5];
    let total = 0;
    randomNumber.forEach(
        function(itemsValue){
            total += itemsValue;
            return total;
        }
    );
    console.log(total);
 */   


// Another way to write forEach loop:
    let randomNumber = [1,2,3,4,5];
    let total = 0;

    function extractValue(itemsValue){
        total += itemsValue;
        return total;
    }
    randomNumber.forEach(extractValue);
    console.log(total);

