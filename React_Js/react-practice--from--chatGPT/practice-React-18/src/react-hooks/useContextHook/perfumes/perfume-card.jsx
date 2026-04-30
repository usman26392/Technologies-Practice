import AddToCartButton from "../add-to-cart-button";


export default function PerfumeCard() {
  console.log("PerfumeCard: component rendered!")
  return (
    <div style={{
            border: "1px solid black",
            display: "inline-flex",
            flexDirection: "column",
            padding: "20px",
            width: "300px"
        }}>
            <h3>Perfume name is Versace Dylan blue</h3>
            <AddToCartButton />
        </div>
  )
}
