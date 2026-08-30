import { useCallback, useState } from "react";
import ProductItem from "./product-item";


export default function ProductGallery() {

    console.log("ProductGallery: parent Component rendered!");

    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);


    // without useCallback hook
    // const handleAddToCart = (productName) => {
    //     console.log("handleAddToCart: inner function ran!")
    //     setCartCount((prev) => prev + 1);
    // };


    // with useCallback hook
    const handleAddToCart = useCallback((productName) => {
        console.log(`${productName} added to cart!`);
        setCartCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h1>Shopping Mall</h1>
                <div>

                    <p>Items in Cart: <strong>{cartCount}</strong></p>

                    <p>Wishlist Items: <strong>{wishlistCount}</strong></p>
                    <button onClick={() => setWishlistCount(wishlistCount + 1)}>
                        Update Wishlist (Triggers Parent Re-render)
                    </button>
                </div>

                <div style={{ display: 'flex', justifyContent: "center"}}>
                    {/*  */}
                    <ProductItem name="Laptop" addToCart={handleAddToCart} />
                </div>

                <p><small>Check the Console: "Rendering Product" only appears on initial load.</small></p>
            </div>
        </div>
    )
}
