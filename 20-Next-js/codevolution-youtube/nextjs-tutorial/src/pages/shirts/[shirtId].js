import { useRouter } from "next/router";

export default function Shirt({shirts}) {
    const router = useRouter();

    if(router.isFallback) {
        return (
            <h1>loading....</h1>
        )
    }

    return (
        <div>
            <h2>{shirts.id} {shirts.title} price: {shirts.price}</h2>
            <p>{shirts.description}</p>
            <br></br>
        </div>
    )
}


export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:2000/shirts/${params.shirtId}`);
    const data = await response.json();
    return {
        props: {
            shirts: data
        },
        revalidate: 1
    }
}


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    shirtId: "1"
                }
            }
        ],
        fallback: true
    }
}

