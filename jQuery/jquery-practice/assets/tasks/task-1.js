/**
 * --------------- task-1 ------------------
 */

 
$(function() {
    let loanValue = 0,
        investValue = 0;

    $(".form-field").on("change", function(e) {     
        let currentField = $(this),
            currentValue = $(this).val();

            let reg = /^\d+$/; // match only a number

        if(currentField.hasClass("loan")) {      
            if(reg == currentValue) {
                loanValue = currentValue;
            }
            else {
                console.warn("error: please enter a number")
            }
        }

        else if (currentField.hasClass('invest')) {
            if(reg == currentValue) {
                investValue = currentValue;
            }
            else {
                console.warn("error: please enter a number")              
            }
        }
    });

    $('.calculateBtn').on('click', function(e) {
        e.preventDefault();
        let formula = (loanValue * investValue ) / 2;
        console.log(formula);
        $(".form-field").val("");

    })


})