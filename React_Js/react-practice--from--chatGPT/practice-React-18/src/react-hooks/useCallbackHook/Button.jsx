

import React from "react";

function Button({ incrementCountHandler, label }) {
  console.log("Its child component rendered.");
  return (
    <div>
      <button onClick={incrementCountHandler}>{label}</button>
    </div>
  );
}

// export default Button;


export default React.memo(Button);
