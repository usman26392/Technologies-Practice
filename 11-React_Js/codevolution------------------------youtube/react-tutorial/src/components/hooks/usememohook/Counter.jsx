import { useMemo, useState } from "react"


// example: useMemo()
const Counter = () => {
    const [counterone, setCounterone] = useState(0);
    const [countertwo, setCountertwo] = useState(0);
    
    const incrementCounterOne = ()=> {
        console.log("counter one function")
        return setCounterone( counterone + 1 )
    }

    const incrementCounterTwo = ()=> {
        console.log("counter two function")
        return setCountertwo(countertwo + 1 )
    }
    
    
    // without useMemo()
    // const isEven = ()=> {
    //     let i = 0;
    //     while(i < 2000000000 ) i++
    //     return counterone % 2 === 0;
    // }

    // with useMemo()
    // useMemo ki waja say dosri state par affect nai pary ga.
    // there will not affect other components due to useMemo(). 
    const isEven = useMemo(()=> {
        let i = 0;
        while(i < 2000000000 ) i++
        return counterone % 2 === 0;
    },[counterone])




  return (
    <div>Counter
        <div>
            <button onClick={incrementCounterOne} >Counter one - {counterone} </button>
            {/* without useMemo */}
            {/* <span>{isEven() ? " even" : "odd"}</span>  */}
            
            {/* with memo */}
            <span>{isEven ? " even" : "odd"}</span> 

        </div>
        <div>
            <button onClick={incrementCounterTwo} >Counter Two - {countertwo} </button>
        </div>
    </div>
  )
}

export default Counter