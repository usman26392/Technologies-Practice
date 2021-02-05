/**
 * Date Object
 */

 let myDate = new Date();
 console.log(myDate);



//  format date
let tarikh = new Date();
let date = tarikh.getDate();
let month = tarikh.getMonth();

let monthNames = ["jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
let year = tarikh.getFullYear();

function formatDate() {
    return `${date}-${monthNames[month]}-${year} `; 
}

console.log(formatDate());

