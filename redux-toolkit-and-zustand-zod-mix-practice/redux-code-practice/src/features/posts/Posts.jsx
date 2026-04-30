// Import the hook to fetch all posts
import { useGetAllPostsQuery } from "./postsApi";

// Component to display all posts from JSONPlaceholder API
export default function Posts() {
  // Call the hook to fetch all posts
  // This automatically handles loading, caching, and error states
  // data: contains the posts array when successfully fetched
  // isLoading: true while the request is in progress
  // error: contains error details if the request fails

  //   That's destructuring with renaming in JavaScript. Let me break it down:
  //   useGetAllPostsQuery() returns an object like:
  // {
  //   data: [post1, post2, post3, ...],
  //   isLoading: false,
  //   error: null
  // }

  const { data: posts, isLoading, error } = useGetAllPostsQuery();


  // Show loading message while fetching data
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Show error message if the request failed
  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

  // Show posts if data was successfully fetched
  // Display only the first 5 posts for simplicity
  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts from JSONPlaceholder API</h2>
      {posts &&
        posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            {/* Post ID */}
            <h3>Post #{post.id}</h3>

            {/* Post Title */}
            <h4>{post.title}</h4>

            {/* Post Body/Content */}
            <p>{post.body}</p>

            {/* User ID who created this post */}
            <small>By User {post.userId}</small>
          </div>
        ))}
    </div>
  );
}
