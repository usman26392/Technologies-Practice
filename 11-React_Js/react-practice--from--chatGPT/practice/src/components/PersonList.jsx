

// topic: list rendering

let peoples = [
    {
        id: 1,
        name: 'Muhammad Farhan'
    },
    {
        id: 2,
        name: 'Muhammad Usman'
    },
    {
        id: 3,
        name: 'Fahad Ali'
    },
    {
        id: 4,
        name: 'Muhammad Rehan'
    },

]




function PersonList() {
  return (
    <div>
        <ul>
            {
                peoples.map(function(people) {
                    return (
                        <li key={people.id}>{people.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default PersonList