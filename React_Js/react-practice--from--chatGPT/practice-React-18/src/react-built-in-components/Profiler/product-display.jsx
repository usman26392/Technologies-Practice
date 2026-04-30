

import { Profiler, useState } from "react";
import ProductList from "./product-list";


// Topic: - <Profiler>

function onRenderCallback(id, phase, actualDuration) {
    console.log(`${id} (${phase}) took ${actualDuration}ms`);
}

export default function ProductDisplay() {
    const [search, setSearch] = useState("");

    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
        { id: 3, name: "Tablet" },
    ];

    // console.log("Product display parent component rendered!");

    // filter product inner variable
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div>
            <input
                placeholder="Search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Profiler id="ProductListChildComponent" onRender={onRenderCallback}>
                <ProductList products={filteredProducts} />
            </Profiler>
        </div>
    );
}
