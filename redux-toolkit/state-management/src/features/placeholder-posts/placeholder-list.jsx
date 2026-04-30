
import { useState } from "react";
import { useGetPostsQuery, useCreatePostMutation } from "../../services/json-placeholder-api-slice";



// Topic: Rexdux toolKit query - for fetching and mutating data from an API
export default function PlaceholderList() {
    const { data, isError, isLoading } = useGetPostsQuery();
    // console.log("dataaaaaaaaa", data);
    const [ createPost , { isError: isCreatingPostError, isLoading: isCreatingPost,   }] = useCreatePostMutation();

    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    });


    // handle creating a new post
    async function handleCreatePost() {
        await createPost(newPost);
        setNewPost({
            title: "",
            body: ""
        })
    }

    // handle input changes for the new post form
    function handleChange(e) {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }))
    }


    if (isLoading) return <p>Loading ...</p>;
    if (isError) return <p>Error loading posts.</p>

    return (
        <>
            <div>
                {
                    data.length > 0 && data.map((item, idx) => {
                        return (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                }
            </div>

            {/* for posting posts */}
            <div>
                <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Enter a post title" />
                <input type="text" name="body" value={newPost.body} onChange={handleChange} placeholder="Enter a description" />
                <button onClick={handleCreatePost} disabled={isCreatingPost}>
                    {isCreatingPost ? "Creating Post..." : "Create Post"}
                </button>
                {isCreatingPostError && <p>Error occurred while creating post.</p>}
            </div>
        </>
    )
}



// OR with ternary operator
// export default function PlaceholderList() {
//     const { data, isError, isLoading } = useGetPostsQuery();
//     // console.log("dataaaaaaaaa", data);
//     const [createPost, { isError: isCreatingPostError, isLoading: isCreatingPost }] = useCreatePostMutation();

//     async function handleCreatePost() {
//         await createPost(newPost);
//         setNewPost({
//             title: "",
//             body: ""
//         })
//     }

//     const [newPost, setNewPost] = useState({
//         title: "",
//         body: "",
//     });

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setNewPost((prevPost) => ({
//             ...prevPost,
//             [name]: value
//         }))
//     }


//     return (
//         <>
//             {
//                 isLoading
//                     ? <p>Loading ...</p>
//                     : isError
//                         ? <p>Error loading posts.</p>
//                         : <div>
//                             {
//                                 data.length > 0 && data.map((item, idx) => {
//                                     return (
//                                         <div key={item.id}>
//                                             <h2>{item.title}</h2>
//                                             <p>{item.body}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>


//             }

//             {/* for posting posts */}
//             {
//                 isCreatingPostError
//                     ? <p>Error occurred while creating post</p>
//                     : <div>
//                         <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Enter a post title" />
//                         <input type="text" name="body" value={newPost.body} onChange={handleChange} placeholder="Enter a description" />
//                         <button onClick={handleCreatePost} disabled={isCreatingPost}>
//                             {isCreatingPost ? "Creating Post..." : "Create Post"}
//                         </button>
//                     </div>
//             }

//         </>
//     )
// }




// Explanation of the useCreatePostMutation hook usage:
// const [
//   createPost, // The function you call: createPost({ title: 'New Post' })
//   { 
//     isLoading,    // True while the request is in flight
//     isSuccess,    // True if the last mutation was successful
//     isError,      // True if the last mutation failed
//     error,        // The actual error object (useful for showing messages)
//     data,         // The response data from the server after success
//     reset         // A function to manually clear the mutation state
//   }
// ] = useCreatePostMutation();