

let popupElement = document.querySelector(".wrap");

let a = 0;
let interValue =  setInterval(showPopup,8000);

function showPopup() {
    if(a == 0) {
        popupElement.style.display= "block";
        a++;
        // only for testing.
        console.log(interValue);
    }
    else {
        clearInterval(interValue);
    }
}


