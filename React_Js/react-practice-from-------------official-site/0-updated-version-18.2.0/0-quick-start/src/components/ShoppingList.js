

/**
 * -------------------------- example: rendering list --------------------------
 */

const products = [
    {
        id: 1,
        title: 'cabbage'
    },
    {
        id: 2,
        title: 'garlic'
    },
    {
        id: 3,
        title: 'apple'
    },
]


const ShoppingList = () => {
    const vegetableListItems = products.map((vegeItem)=> {
        return (
            <li key={vegeItem.id}> 
                id:{vegeItem.id}  {vegeItem.title} 
            </li>
        )
    });
    

  return (
    <>
        <h1>ShoppingList</h1>
        <ul>
            {vegetableListItems}
        </ul>
    </>
  )
}

export default ShoppingList