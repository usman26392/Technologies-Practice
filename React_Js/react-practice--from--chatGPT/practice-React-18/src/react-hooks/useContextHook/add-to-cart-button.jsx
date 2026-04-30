import { useContext } from "react"
import { CartItemCountContext } from "../../providers/cart-provider"; 


export default function AddToCartButton() {
    console.log("AddToCartButton: component rendered!")
    const { handleAddToCart } = useContext(CartItemCountContext);

    return (
        <button onClick={handleAddToCart}>AddToCart</button>
    )
}
