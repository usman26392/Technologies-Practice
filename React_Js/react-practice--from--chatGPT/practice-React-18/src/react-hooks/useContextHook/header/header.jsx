import { useContext } from "react"
import { CartItemCountContext } from "../../../providers/cart-provider"; 
import styles from "./header.module.css";


export default function Header() {
  console.log("Header: component rendered!")
  const { cartItemCount } = useContext(CartItemCountContext)


  return (
    <header className={`${styles["header"]}`}>
      <h1>My E-commerce app</h1>
      <p>Cart Items: {cartItemCount} </p>
    </header>
  )
}
