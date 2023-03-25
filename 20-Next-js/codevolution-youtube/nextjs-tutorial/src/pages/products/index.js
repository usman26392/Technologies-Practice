import Link from "next/link"


export default function Products({productUrl = 100}  ) {
    return (
        <>
            <Link href="/">go to home page</Link>
            <div>Product main content!!</div>
            <Link href="/products/1" >
                <div>product 1</div>
            </Link>
            <Link href="/products/2"  replace>
                <p>product 2</p>
            </Link>
            <Link href= {`/products/${productUrl}`}   >
                <p>product {productUrl} </p>
            </Link>
        </>
    )
}


