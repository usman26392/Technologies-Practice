


const Plan = ({listItem , id , del}) => {
  return (
    <li className="bg-info p-1 px-3 mb-2 rounded-3 d-flex justify-content-between align-items-baseline">
      <span>{listItem}</span>
      <span className="btn btn-danger" 
          onClick={()=> {
            del(id) // caller of del function
            console.log(id)
          }} >X</span>
    </li>
  )
}

export default Plan