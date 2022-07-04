
import { useState, useEffect } from "react"
import styles from "./Counter.module.scss"


const Counter = () => {
   const [number, setNumber] = useState(0);
  
   function incrementNumber() {
    setNumber((prevCount) => {
        return (
            prevCount + 1
        )
    })
   }

   function decrementNumber() {
    setNumber( (prevCount)=> {
        return(
            prevCount - 1
        )
    } )
   }

   useEffect(function() {
    console.log("component updated")
   })

   

  return (
    <div>
        {/* <button onClick={()=> {
            setNumber(number -1)
        }}>-</button>
        <p>{number}</p>
        <button onClick={ ()=> {
            setNumber(number + 1)
        } }>+</button> */}

        <button style={btn_style} onClick={decrementNumber}>-</button>
        <p className={styles.count_1}>{number}</p>
        {/* <button onClick={incrementNumber}>+</button> */}
        <button style={btn_style} onClick={incrementNumber}>+</button>

        <div className={styles.box}>
            <h2 className={styles.box__title}>This is a heading</h2>
            <p className={styles.box__para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, a repellat doloribus, nisi officiis possimus corporis ratione quo modi minus mollitia architecto consequatur maiores rem, cum porro saepe quam? Distinctio.</p>
        </div>


    </div>
  )
}

let btn_style = {
    color: "red",
    padding: "0px 30px",
    backgroundColor: "black",
    border: 0,
    fontSize: "24px",
    cursor: "pointer"
}

export default Counter