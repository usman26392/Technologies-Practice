

const List = (props) => {
    const userNames  = [...props.names]
    // console.log(userNames)
  return (
    userNames.map((name, idx)=> ( <li key={idx} >{name}</li>))
  )
}

export default List