

import React from "react";

function Button({ click, label }) {
  console.log(`Button component rendered.`);
  return (
    <div>
      <button onClick={click}>{label}</button>
    </div>
  );
}

export default React.memo(Button);
