import React from "react";


const Title = () => {
  console.log("rendering title component!");
  return (
    <h2>Callback example</h2>
  )
}


export default React.memo(Title) 