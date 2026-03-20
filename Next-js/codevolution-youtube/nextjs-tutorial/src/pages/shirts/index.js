
export default function Shirts({shirts}) {
    return (
        <div>
            <h1>List of Shirts</h1>
            {
                shirts.map(function(shirt) {
                    return (
                        <div key={shirt.id}>
                            <h2>{shirt.title} price:{shirt.price}</h2>
                            <p>{shirt.description}</p>
                            <br></br>
                        </div>
                    )
                })
            }
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("http://localhost:2000/shirts/");
    const data = await response.json();
    return {
        props: {
            shirts: data,
        },
        revalidate: 30,
    }
}