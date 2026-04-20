

import useFetchData from "./useFetchData"; // custom hook

export default function DataFetchingComponent() {
    const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return (
            <p>loading data .....</p>
        )
    }
    if (error) {
        return (
            <p>Error: {error}</p>
        )
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
