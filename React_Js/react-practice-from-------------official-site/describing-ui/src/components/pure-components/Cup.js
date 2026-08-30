



// example-1
// const Cup = () => {
//     let cup=[];

//     for(let i=0; i<= 12; i++) {
//         cup.push(<h2 key={i}>Tea cup for guest #{i}</h2>)    
//     }

//   return (
//       cup
//   )
// }

// export default Cup;



// example-2

function CupGuest({guest}) {
    return (
        <h2>Tea cup for guest #{guest}</h2>
    )
}

const Cup = () => {
    let cup=[];
    for(let i=0; i<= 12; i++) {
        cup.push(<CupGuest key={i} guest={i}/>)    
    }

    return cup;
}

export default Cup;
