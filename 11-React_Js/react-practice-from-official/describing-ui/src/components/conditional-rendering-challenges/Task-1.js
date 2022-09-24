
/**
 * Show an icon for incomplete items with ternary operator ? :
 * Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.
 */

function UsmanPackingListItem({name, isPacked}) {
    return (
        <li>
            {name}
            {isPacked ?  '✔' : '❌'}
        </li>
    )
}


const UsmanPackingList = () => {
  return (
    <div>
        <h1>Usman Ride's Packing List</h1>
        <ul>
            <UsmanPackingListItem name="Space suit" isPacked={true}/>
            <UsmanPackingListItem name="Helmet with a golden leaf" isPacked={false}/>
            <UsmanPackingListItem name="Photo of Tam" isPacked={false}/>
        </ul>
    </div>
  )
}

export default UsmanPackingList