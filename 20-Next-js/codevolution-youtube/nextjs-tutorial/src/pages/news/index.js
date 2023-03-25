
export default function NewsArticles({newsArticles}) {
    // console.log(newsArticles)
    return (
        <div>
            <h1>list of news articles</h1>
            {
                newsArticles.map(newarticle => {
                    return (
                        <div key={newarticle.id}>
                            <h1>{newarticle.title} </h1>
                            <h2>{newarticle.category} </h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

// server side rendering
export async function getServerSideProps() {
    const response = await fetch("http://localhost:2000/news/");
    const data = await response.json() ;
    return {
        props: {
            newsArticles: data
        }
    }

}