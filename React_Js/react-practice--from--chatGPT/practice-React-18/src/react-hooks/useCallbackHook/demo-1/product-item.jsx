import React from "react"


function ProductItem({ name, addToCart }) {
    console.log("ProductItem: child component rendered")
    return (
        <div>
            <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h4>{name}</h4>
                <button onClick={() => addToCart(name)}>Add to Cart</button>
            </div>
        </div>
    )
}

// without memo
// export default ProductItem;

// with memo
export default React.memo(ProductItem);
