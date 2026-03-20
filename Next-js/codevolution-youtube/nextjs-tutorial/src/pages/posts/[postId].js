import { useRouter } from "next/router";


export default function PostDetail({post}) {
    const router = useRouter();
    console.log(router)
    
    // this for when fallback is true in getStaticPaths()
    if(router.isFallback) {
        return <h1>loading...</h1>
    }

    return (
        <div>
            <h1>Post detail page content</h1>
            <h2>{post.id} {post.title} </h2>
            <p>{post.body}</p>
        </div>
    )
}


export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths = data.map((post)=> {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        // paths: [
        //     {
        //         params: { postId: "1" }
        //     },
        //     {
        //         params: { postId: "2" }
        //     },
        //     {
        //         params: { postId: "3" }
        //     },
        // ],
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    console.log(params)
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}` );
    const data = await response.json();
    return {
        props: {
            post: data
        }
    }
}