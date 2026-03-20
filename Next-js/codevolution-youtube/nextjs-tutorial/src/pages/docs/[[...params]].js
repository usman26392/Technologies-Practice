

import { useRouter } from "next/router"


export default function Docs() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    if(params.length === 1) {
        return (
            <h1>Viewing url is:  {params[0]} </h1>
        )
    }
    else if (params.length === 2) {
        return (
            <h1>Viewing url is:  {params[1]} </h1>
        )
    }
    return (
        <h1>docs main page</h1>
    )
}