import AddToCartButton from "../add-to-cart-button";


export default function SoapCard() {
  console.log("SoapCard: component rendered!")
  return (
    <div style={{
        border: "1px solid black",
        display: "inline-flex",
        flexDirection: "column",
        padding: "20px",
        width: "300px"
    }}>
        <h3>Soap name is lux</h3>
        <AddToCartButton/>
    </div>
  )
}
