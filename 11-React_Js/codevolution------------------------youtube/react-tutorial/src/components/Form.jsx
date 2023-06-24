import { useState } from "react"


const Form = () => {
    const [userName, setUserName] = useState("usman");
    const [comment, setComment] = useState("i am front-end developer");
    const [skills, setSkills] = useState("react");

    function userNameHandler(e) {
        setUserName( (prevName )=> prevName = e.target.value )
    }

    function commentHandler(e) {
        setComment( (prevComment)=> (prevComment = e.target.value ))
    }

    function skillsHandler(e) {
        setSkills( (prevSkills)=> (prevSkills = e.target.value))
    }

    function submitDataHandler(e) {
        e.preventDefault();
        alert(`My name is ${userName} and  ${comment} and my skills is  ${skills} `  )
    }


  return (
    <form onSubmit={submitDataHandler} >
        <h1>Form</h1>
        <div>
            <label htmlFor="">Username:</label>
            <input type="text" value={userName}  onChange={ userNameHandler}  />
        </div>
        <div>
            <label htmlFor="">UserComment:</label>
            <input type="text" value={comment}  onChange={ commentHandler }  />
        </div>
        <div>
            <label htmlFor="">User skills:</label>
            <select value={skills} onChange={skillsHandler}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="gsap">GSAP</option>
            </select>
        </div>
        <button type="submit" >submit</button>
    </form>
  )
}

export default Form