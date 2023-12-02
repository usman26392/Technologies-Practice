
// import { useState } from "react"

// export const SnapShot = () => {
//   const [message, setMessage ] = useState("Hi..");
//   const [isSent, setIsSent] = useState(false);

//   if(isSent) {
//     return <h1>Your message is on its way!</h1>
//   }

//    return (
//     <div>
//       <form onSubmit={(e)=> {
//         return (
//           e.preventDefault(),
//           setIsSent(true)
//           )
//       } }>
//         <textarea 
//           name="" 
//           id="" 
//           cols="30" 
//           rows="5" 
//           value={message}
//           onChange={(e)=> ( setMessage(e.target.value))} 
//           ></textarea>
//         <button type="submit">send</button>
//       </form>
//     </div>
//   )
// }

// state over time
// import { useState } from "react";

// export default function Form() {
//   const [to, setTo] = useState("usman");
//   const [message, setMessage ] = useState("Hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }
  

//   return (
//     <form 
//       action=""
//       onSubmit={handleSubmit}
//       >
//       <label htmlFor="">
//         To: {""}
//         <select 
//           value={to}
//           onChange={e => (setTo(e.target.value)) }  
//           >
//           <option value="usman">Usman</option>
//           <option value="rehan">Rehan</option>
//         </select>
//       </label>

//       <textarea 
//         name=""
//         placeholder="Message"
//         value={message}
//         onChange={e=> (setMessage(e.target.value))}
//         ></textarea>
//         <button type="submit">Send</button>
//     </form>
//   )
// }

// challenge 1
import { useState } from "react";

export default function TrafficLight() {
  const [walk , setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "stop is next" : "walk is next")
  }

  return (
    <div>
      <button onClick={handleClick}>Change to {walk ? "stop" : "walk" } </button>
      <h1 style={
        {
          color: walk ? "green" : "red"
        }
      }> {walk? "walk" : "stop"}</h1>
    </div>
  )
}

