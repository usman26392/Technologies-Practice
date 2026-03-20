let obj = {
    nameElement: "keyboard",
    buttons: "109",
    // function
    add:function(num_1, num_2) {
      return num_1 + num_2;
    },
    //  Nested object
    childObj: {
      userName: "Book"
    },
    // array
    arr: [3,4,5,6,7]
  };
  
  console.log(obj.add(5,5));
  console.log(typeof obj.childObj);
  console.log(obj.arr);