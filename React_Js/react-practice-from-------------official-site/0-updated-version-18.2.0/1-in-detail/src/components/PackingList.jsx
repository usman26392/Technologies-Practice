


// example: conditional rendering
export default function PackingList() {
  return (
    <div>
        <h1>PackingList</h1>
        <ul>
            <ListItem text="Space suit" isPacked={true} />
            <ListItem text="Helmet with a golden leaf" isPacked={false} />
            <ListItem text="Photo of Tam" isPacked={true} />
        </ul>
    </div>
  )
}


function ListItem({text, isPacked}) {
    return (
        <li>{text} {isPacked && '✔️' } </li>
    )
}


