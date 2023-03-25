
export default function Category({articles, category}) {
    return (
        <div>
            <h1>Showing news for category: {category} </h1>
            {
                articles.map(function(article) {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}


// server side rendering
export async function getServerSideProps(context) {
    // console.log(context)
    const {params} = context;
    const {category} = params;
    // console.log(category)
    const response = await fetch(`http://localhost:2000/news?category=${category}`);
    const data = await response.json();
    return {
        props: {
            articles: data,
            category
        }
    }
}