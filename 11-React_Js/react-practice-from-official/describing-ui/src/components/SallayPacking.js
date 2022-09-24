
function SallyItems({listname, isSallyPackedItem}) {
    // if(isSallyPackedItem) {
    //     return <li className="sallyitem">{listname} ✔</li>
    // }
    // return <li className="sallyitem">{listname}</li>

    // or
    // return (
    //     <li className="sallyitem">
    //         {
    //             isSallyPackedItem ? listname + "✔" : listname + "❌"
    //         }
    //     </li>
    // )
    
    // OR
    // if true evaluate than only right side will be render.
    // return (
    //     <li className="sallyitem">
    //         {listname} {isSallyPackedItem && "✔" }
    //     </li>
    // )


}


const SallayPacking = () => {
  return (
    <div> 
        <h1>Sallay Packing list</h1>
        <ul>
            <SallyItems listname="Space suit" isSallyPackedItem={true}/>
            <SallyItems listname="Helmet with a golden leaf" isSallyPackedItem={false}/>
            <SallyItems listname="Photo of Tam" isSallyPackedItem={true}/>
        </ul>
    </div>
  )
}

export default SallayPacking