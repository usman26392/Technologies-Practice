import { useState } from "react"


// example1
export const MovingDot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div 
      className="red-container"
      onPointerMove={(e)=> {
        setPosition({
          ...position,
          x: e.clientX,
          y: e.clientY
        })
      }}
    >
      <span 
        className="red-circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></span>
    </div>
  )
}





// example2:  form
// export function EmailForm() {
//   const [person, setPerson] = useState({
//     firstName: "Muhammad",
//     lastName: "usman",
//     email: "usman@mail.com"
//   });

//   function handleFirstName(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }

//   function handleLastName(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }

//   function handleEmail(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     })
//   }


//   return(
//     <form style={
//       {
//         marginTop: "130px"
//       }
//     }>
//       <label htmlFor="">
//         firstname: {"  "}
//         <input 
//           type="text"
//           value={ person.firstName }
//           onChange= {handleFirstName}
//         />
//       </label>

//       <label htmlFor="">
//         lastname: {"  "}
//         <input 
//           type="text"
//           value={person.lastName } 
//           onChange= {handleLastName}
//         />
//       </label>

//       <label htmlFor="">
//         Email: {"  "}
//         <input 
//           type="email" 
//           value={person.email}
//           onChange= {handleEmail}
//         />
//       </label>

//     </form>
//   )
// }


// using a single event handler for multple input fields
export function EmailForm() {
  const [person, setPerson] = useState({
    firstName: "Muhammad",
    lastName: "usman",
    email: "usman@mail.com"
  });

  function handleFormFields(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  


  return(
    <form style={
      {
        marginTop: "130px"
      }
    }>
      <label htmlFor="">
        firstname: {"  "}
        <input 
          type="text"
          name = "firstName"
          value={ person.firstName }
          onChange= {handleFormFields }
        />
      </label>

      <label htmlFor="">
        lastname: {"  "}
        <input 
          type="text"
          name="lastName"
          value={person.lastName } 
          onChange= {handleFormFields}
        />
      </label>

      <label htmlFor="">
        Email: {"  "}
        <input 
          type="email" 
          name="email"
          value={person.email}
          onChange= {handleFormFields}
        />
      </label>

    </form>
  )
}

