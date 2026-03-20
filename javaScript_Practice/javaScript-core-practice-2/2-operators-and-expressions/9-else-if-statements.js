/**
 * else if statements:
 * else if statements ka tub istamaal hota hay,
 * jub aik say zayeda conditions(decisions) check karni hun.
 * in conditions may jo b true ho jai gi , phirh sirf uska block
 * execute hoga, or agar koi b conditions true na hoi toh phir
 * else ka block execute hoga.
 */


 let avg_Marks = prompt("Enter students Marks :");
 if ( (avg_Marks < 50) && (avg_Marks >= 0) )  {
     console.log("Remarks: Fail");
}
 else if(avg_Marks == 50 ) {
     console.log("Remarks: Pass");
}
 else if( (avg_Marks > 50) && (avg_Marks <= 60) )  {
     console.log("Remarks: good");
}
 else if( (avg_Marks > 70) && (avg_Marks <= 100) )  {
    console.log("Remarks: execellent");
}
else {
    console.log("Please Enter marks between 0 and 100");
}




