

// below: passing/sending data from child component to parent component !

export const Child = (props)=> {
    return (
        <button 
            onClick={()=> (props.clickMessage("i am from child component")) }>
            Child button
        </button>
    )
}