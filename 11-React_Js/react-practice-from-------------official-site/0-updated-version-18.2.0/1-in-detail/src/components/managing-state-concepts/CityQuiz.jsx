import { useState } from "react"


// example: reacting / interacting to input with state

function CityQuiz() {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(null)

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
      try {
        await submitForm(answer);
        setStatus('success');   
      } catch (error) {
        setStatus('typing');
        setError(error)
      }
  }


  if(status === 'success') {
    return <h1 style={{color:'green'}}>That is right!</h1>
  }

  return (
    <div>
      <h2>CityQuiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit} >
        <textarea
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          ></textarea>
        <button 
            type="submit"
            disabled= {
              answer.length === 0 || status === 'submitting'
            }
        >submit</button>
        {
          error !== null && <p style={{color: 'red'}} >{error.message}</p>
        }
      </form>
    </div>
  )
}

export default CityQuiz


function submitForm(answer) {
  return new Promise((resolve, reject)=> {
    setTimeout( ()=> {
      let shouldError = answer.toLowerCase() !== 'lima';
      if(shouldError) {
        reject(new Error('good guess but a wrong answer. Try again!') )
      }
      else {
        resolve()
      }
    })
  })
}