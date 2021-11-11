/**
 * ---------- form handling
 */

    let frm = document.querySelector(".form-1");
   



/**
 * ------------ accessing form fields elements ------------ 
 * */    

// console.log(frm[0].placeholder);



/**
 * ------------- form validation -----------------
 */

   let frm3 = document.querySelector(".form3");
   let textField = frm3[0];
   let submitButton = frm3[1];
   let smAlert = document.querySelector(".smAlert");
   let regPattern = /^([^0-9\W]*)$/;
   
   textField.addEventListener("keyup",()=>{
     if(regPattern.test(textField.value)) {
       smAlert.textContent = "Text is Valid";
       textField.style.borderColor = "green";    
       smAlert.style.color = "green";

     }
     else {
      textField.style.borderColor = "red";
      smAlert.textContent = "Text is inValid";
      smAlert.style.color = "red";
     }
   });