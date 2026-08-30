// This is my example
// function checkValidation() {
//   let inputField = document.querySelector(".inputField"),
//     submitBtn = document.querySelector(".submitBtn"),
//     validation_message = document.querySelector(".validation-message");

//   submitBtn.addEventListener("click", function (e) {
//     // console.log("This object will create on run time(i.e on click) ", e)
//     // console.log("This is DOM object", this);
//     let inputFieldvalue = inputField.value;
//     try {
//       if (inputFieldvalue.trim() == "") {
//         throw "you entered nothing!";
//       }
//       if (isNaN(inputFieldvalue)) {
//         throw "you entered not a number";
//       }

//       inputFieldvalue = Number(inputFieldvalue);
//       if (inputFieldvalue < 5) {
//         throw "Too low";
//       }
//       if (inputFieldvalue > 10) {
//         throw "Too High";
//       }
//     } catch (error) {
//       // console.log("My Custom error message is:", error);
//       validation_message.innerHTML = `My Custom error message is: ${error}.`;
//     }
//   });
// }

// checkValidation();






// chatGPT: more improve code of above, resuable and concise.
// function validateNumber(value) {
//   try {
//     if (value.trim() === "") {
//       throw "You entered nothing!";
//     }
//     if (isNaN(value)) {
//       throw "You entered not a number";
//     }

//     const number = Number(value);
//     if (number < 5) {
//       throw "Too low";
//     }
//     if (number > 10) {
//       throw "Too high";
//     }
//     return null; // No error

//   } catch (error) {
//     return error;
//   }
// }

// function setupValidation() {
//   const inputField = document.querySelector(".inputField");
//   const submitBtn = document.querySelector(".submitBtn");
//   const validationMessage = document.querySelector(".validation-message");

//   submitBtn.addEventListener("click", () => {
//     const errorMessage = validateNumber(inputField.value);
//     validationMessage.innerHTML = errorMessage
//       ? `My Custom error message is: ${errorMessage}.`
//       : "";
//   });
// }

// setupValidation();


// example: finally statement
function checkValidation() {
  let inputField = document.querySelector(".inputField"),
    submitBtn = document.querySelector(".submitBtn"),
    validation_message = document.querySelector(".validation-message");

  submitBtn.addEventListener("click", function (e) {
    // console.log("This object will create on run time(i.e on click) ", e)
    // console.log("This is DOM object", this);
    let inputFieldvalue = inputField.value;
    try {
      if (inputFieldvalue.trim() == "") {
        throw "you entered nothing!";
      }
      if (isNaN(inputFieldvalue)) {
        throw "you entered not a number";
      }

      inputFieldvalue = Number(inputFieldvalue);
      if (inputFieldvalue < 5) {
        throw "Too low";
      }
      if (inputFieldvalue > 10) {
        throw "Too High";
      }
    } catch (error) {
      // console.log("My Custom error message is:", error);
      validation_message.innerHTML = `My Custom error message is: ${error}.`;
    } finally {
        // empty the input field after the click
        inputField.value = "";
    }

  });
}

checkValidation();

