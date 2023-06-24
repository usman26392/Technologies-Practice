import { useState } from "react";

const Foji1 = () => {
  const [gunCount, setGunCount] = useState(0);

  function gunShotHandler() {
    setGunCount( (prevGunCount)=> prevGunCount + 1 )
  }

  return (
    <div>
      <h3 onClick={gunShotHandler} >Foji 1 has ak47 and fired: {gunCount} </h3>
    </div>
  )
}

export default Foji1