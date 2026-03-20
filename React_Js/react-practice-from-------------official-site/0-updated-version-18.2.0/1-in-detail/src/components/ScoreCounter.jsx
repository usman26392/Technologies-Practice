import { useState } from "react"



// queuing a series of state updates
function ScoreCounter() {
    const [score, setScore] = useState(0);

    function increment() {
        // setScore(score + 1) // this is default behaviour of re-render, i.e that is not right
        // this is right way
        setScore(s => s + 1 )
    }

  return (
    <div>
        <h1>ScoreCounter</h1>
        <button 
            className="score-btn"
            onClick={()=> increment()}
        >+1</button>
        <button 
            className="score-btn"
            onClick={()=>  {
                increment()
                increment()
                increment()
            } }
        >+3</button>
        <p>
            score: {score} 
        </p>
    </div>
  )
}

export default ScoreCounter