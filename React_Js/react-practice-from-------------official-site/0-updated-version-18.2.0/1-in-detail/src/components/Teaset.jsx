

function Cup(props) {
    // console.log(props)
    // props.name = "rehan"; // props are immutable i.e props(object) property values can not change.
    // props object ki jo properties hoti hayn, un ki values change nai ho sakhteen.
    return (
        <h2>Tea cup for guest {props.name} </h2>
    )
}

// or
function Cup2({name}) {
    // console.log(name)
    // name = "rehan"; // can change variable's value. 
    return (
        <h2>Tea cup for guest {name}</h2>
    )
}


function Teaset() {
  return (
    <div>
        <h1>Teaset</h1>
        <Cup name="usman" />
        <Cup2 name="usman"/>
    </div>
  )
}

export default Teaset