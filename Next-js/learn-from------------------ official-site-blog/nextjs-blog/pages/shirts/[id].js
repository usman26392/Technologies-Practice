
import { useRouter } from "next/router";
import Layout from "../../components/layout";


// this file is part of dynamic routes.
export default function Shirt() {
    let router = useRouter();
    let { query  } = router;
    let pageId = query.id 

    return(
        <Layout>
            <h1>shirt detail page { pageId }  </h1>
        </Layout>
    )  
}

