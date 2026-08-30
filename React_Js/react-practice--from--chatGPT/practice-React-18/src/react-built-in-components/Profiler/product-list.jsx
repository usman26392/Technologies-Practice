


export default function ProductList({products }) {
    // console.log("Product list child component rendered!");
    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>{p.name}</div>
            ))}
        </div>
    );
}
