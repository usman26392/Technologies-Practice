
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };


const Todolist = () => {
  return (
    <div style={person.theme}>
        <h1>{person.name}</h1>
        <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="a man" />
        <ul style={
          {
            backgroundColor: '#472020',
            color: 'pink'
          }
          }>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    </div>
  )
}

export default Todolist

