import { useMemo, useState } from "react";


const products = [
    { id: 1, name: "Laptop", category: "electronics" },
    { id: 2, name: 'Shirt', category: 'clothing' },
    { id: 3, name: 'Phone', category: 'electronics' },
    { id: 4, name: 'Shoes', category: 'clothing' },
];


function ProductList() {
    const [isbtnDisable, setIsbtnDisable] = useState(true);
    const [category, setCategory] = useState('all');

    console.log('Product list Component rendered!');

    // without Memoized filtered products list
    // if any state changes somewhere in the app, it will execute. 
    // const filteredProducts = () => {
    //     console.log('Filtering products logic from without useMemo() ...!');
    //     if (category === "all") {
    //         return products
    //     }
    //     return products.filter((product) => (
    //         product.category === category
    //     ));
    // }

    // with Memoized filtered products list
    const filteredProductsMemo = useMemo(() => {
        console.log('Filtering products logic from useMemo ...');
        if (category === 'all') {
            return products;
        }
        return products.filter(product => product.category === category);
    }, [products, category]); // Re-run only when products or category changes


    return (
        <div>

            <h2>Product List</h2>
            <label>
                Filter by category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                </select>
            </label>

            {/* for without Memoized */}
            {/* <ul>
                {filteredProducts().map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul> */}

            {/* for Memoized */}
            <ul>
                {filteredProductsMemo.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <div>
                <br />
                <button onClick={()=> ( setIsbtnDisable(false))}>button</button>
            </div>

        </div>
    )
}

export default ProductList