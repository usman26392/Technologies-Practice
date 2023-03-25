
import { useRouter } from "next/router"




export default function ReviewDetail() {
    const router = useRouter();
    const {productUrl, reviewUrl } = router.query;


    return (
        <h1>review detail content: product is {productUrl } and review is {reviewUrl} </h1>
    )
}