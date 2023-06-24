import { useEffect, useState } from "react"


const PageTitle = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function buttonHandler() {
        setCount((prevCount)=> ( prevCount + 1))
    }

    // case1: run on first render and after on every update/render
    // useEffect(()=> {
    //     console.log("run useeffect function")
    //     document.title = `you clicked ${count} times!`
    // });

    // case2: conditionally run effects
    // run only when component's state count is change/update
    // useEffect(()=> {
    //     console.log("run useeffect function")
    //     document.title = `you clicked ${count} times!`
    // },[count]);

    // case3: run useeffect only once, we will pass an emty array as an argument.
    // it will not depend on any component's state and props. 
    useEffect(()=> {
        console.log("run useeffect function")
        document.title = `you clicked ${count} times!`
    },[]);



  return (
    <div>
        <h2>PageTitle</h2>
        <input type="text" value={name} onChange={(e)=> (setName(e.target.value))} />
        <button onClick={buttonHandler} >click</button>
        <p>count now: {count} </p>
    </div>
  )
}

export default PageTitle