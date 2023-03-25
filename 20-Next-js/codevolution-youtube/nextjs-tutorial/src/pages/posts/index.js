import Link from "next/link"



const PostsList = ({posts}) => {
  return (
    <div>
        <h1>PostsList</h1>
        {
            posts.map(function(post) {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <h1>{post.id} </h1>
                            <h2>{post.title} </h2>
                            <hr />
                            <hr />
                            <br />
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostsList


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // convert into json
    const data = await response.json();
    return {
        props: {
            // posts: data.slice(0, 3)
            posts: data
        }
    }
}