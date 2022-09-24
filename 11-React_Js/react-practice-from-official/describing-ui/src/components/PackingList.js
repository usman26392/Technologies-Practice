
/**
 * ------------ conditionally rendering ------------------------
 */


function PackingItems({name, isPacked }) {
    return (
    // <li> {name} {isPacked && '😅'} </li>

    // or

    <li>
        {name} {isPacked ? '😅' : '🗻' }
    </li>
    
    )
}


const PackingList = () => {
  return (
    <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <PackingItems name="Space suit" isPacked={true} />
            <PackingItems name="Helmet with a golden leaf" isPacked={false} />            
            <PackingItems name="Photo of Tam" isPacked={true} />            
        </ul>
    </section>
  )
}

export default PackingList