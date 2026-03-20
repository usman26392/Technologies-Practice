
import { useRouter } from "next/router"


export default function ProductDetail() {
    const router = useRouter();
    const productId = router.query.product;

    return (
        <h1>Product detail content! (page url is: {productId}) </h1>
    )
}