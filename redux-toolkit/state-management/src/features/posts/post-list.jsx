
import { useGetPostsQuery, useAddPostMutation } from './post-slice';

const PostsList = () => {
  // Destructure everything needed from the query hook
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  console.log("data", posts)

  
  // Destructure the "trigger" function from the mutation hook
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  const handleAddPost = async () => {
    await addPost({ title: 'New Post', body: 'Hello World', userId: 1 });
    alert("Post added! (Note: JSONPlaceholder is a fake API, so it won't actually save to their DB, but RTK Query will act as if it did)");
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      <button onClick={handleAddPost} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add New Post'}
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;