


const GUEST = ({clickData}) => {
  const btnStyle = {
    color: 'white',
    backgroundColor: 'black',
    border: 0,
    padding: '1rem 2rem',
    cursor: 'pointer'
  }
  
  const btnStyle2 = {
    border: '2px solid red'
  }

  return (
    <div>
        <h1>Welcome guest</h1>
        <button  onClick={clickData}>login</button>
        
        {/* styling */}
        {/* <button style={btnStyle} onClick={clickData}>login</button> */}
        {/* style for more than one objects */}
        {/* <button style={{...btnStyle, ...btnStyle2}} onClick={clickData}>login</button> */}

        {/* style change with the help of state */}
        {/* pending */}

        <button  onClick={clickData}>login</button>



    </div>
  )
}

export default GUEST

