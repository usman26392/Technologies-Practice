

const Todoitem = ({item, id,  del}) => {
  return (
    <li>
        <span>{item}</span>
        <span className='todo-list-cross-icon'
          onClick={()=> {
            return del(id)
            // console.log(id)
          }}
        >X</span>
    </li>
  )
}

export default Todoitem