
// export default function Greet() {
//     return (
//         <h1>Hello Usman!</h1>
//     )
// }



// with arrow function and function expression and default export
let Greet = (props)=> {
    console.log(props)
    return (
        <>
            <h1>Hello {props.personName} , {props.age } ! </h1>
            {
                props.children
            }
        </>
    )
}

export default Greet;



// with arrow function and function expression and named export
// let Greet = ()=> {
//     return (
//         <h1>Hello Usman!</h1>
//     )
// }

// export {Greet}