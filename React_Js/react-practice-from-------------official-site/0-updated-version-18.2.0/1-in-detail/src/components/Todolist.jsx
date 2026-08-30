

let person = {
    name: 'Gregorio Y. Zara',
    imgURL: "https://i.imgur.com/7vQD0fPs.jpg",
    todoItems: [
        {
            id: 1,
            title: 'Improve the videophone'
        },
        {
            id: 2,
            title: 'Prepare aeronautics lectures'
        },
        {
            id: 3,
            title: 'Work on the alcohol-fuelled engine'
        },

    ],
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export default function Todolist() {
  return (
    <div style={person.theme} >
        <h1> {person.name}'s Todos </h1>
        <img 
            src={person.imgURL} 
            alt={person.name} 
        />
        <ul>
            {
                person.todoItems.map((item)=> {
                    return (
                        <li key={item.id}> {item.title } </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
