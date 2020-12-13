/**
 *  Document Fragment:
 *  yey hota hay k hum aik document fragment banatay hayn
 *  us may apna DOM say related kaam kar k , 
 *  active DOM may append kardaytay hayn.
 */  



  let df = document.createDocumentFragment();

  let newTag = document.createElement("p");
  let newTxt = document.createTextNode("This paragraph comes from javaScript");
   newTag.appendChild(newTxt);
   
//  yahan par hum nay p element ko df may append kiya hay.
   df.appendChild(newTag);
   
// only for checking : k kiya hay is may ab
//    console.log(newTag);
   
// ab yahan par hum nay df ko active DOM may append kardiya hay.
  let mySec = document.querySelector(".para-div");
  mySec.appendChild(df);