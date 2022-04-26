

import useCustomCounter from "../custom-hook/COUNTER"


const BUTTON3 = () => {
    const check = useCustomCounter();
  return (
      <div>
          <hr />
          <hr />
          <h1>Custom hook</h1>
          <button onClick={check.handleInc}>
              {check.count}
        </button>
      </div>
  )
}

export default BUTTON3