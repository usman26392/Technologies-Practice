
/**
 * Show the item importance with &&
 * In this example, each Item receives a numerical importance prop. Use the && operator to render ”(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

    Space suit (Importance: 9)
    Helmet with a golden leaf
    Photo of Tam (Importance: 6)
    Don’t forget to add a space between the two labels!
 */

 function UsmanPackingListItem({name, importance}) {
    return (
        <li>
            {name}
            {
                importance > 0 && <i> (importance: {importance} ) </i>
            }
        </li>
    )
}


const UsmanPackingList2 = () => {
  return (
    <div>
        <h1>Usman Ride's Packing List</h1>
        <ul>
            <UsmanPackingListItem name="Space suit" importance={9}/>
            <UsmanPackingListItem name="Helmet with a golden leaf" importance={0}/>
            <UsmanPackingListItem name="Photo of Tam" importance={3} />
        </ul>
    </div>
  )
}

export default UsmanPackingList2