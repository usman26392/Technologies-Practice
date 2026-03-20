

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    }
    else {
        let A = width * height;
        console.log(`Area is:  ${A}`);
    }
  }
  
  try {
    getRectArea(3, 'A');
    // getRectArea(3, 2);
  } catch (e) {
    console.error(e);
  }