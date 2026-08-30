


/**
 *  wrong way: bad practice, unpredictable result, impure component
 */

// let guest = 0;
// function Cup() {
//     guest = guest + 1;
//     return (
//         <h2>Tea cup for Guest {guest} </h2>
//     )
// }


/**
 * right way: pure component 
 */

function Cup({guest}) {
    return (
        <h2>Tea cup for Guest {guest} </h2>
    )
}


const TeaSet = () => {
  return (
    <div>
        <Cup guest={1}/>
        <Cup guest={2}/>
        <Cup guest={3}/>
    </div>
  )
}

export default TeaSet