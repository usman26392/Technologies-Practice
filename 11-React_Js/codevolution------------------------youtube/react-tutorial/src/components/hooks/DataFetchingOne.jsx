import axios from "axios";
import { useEffect } from "react"
import { useState } from "react"



const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    console.log(post)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/12`)
            .then( response=> {
                setLoading(false)
                setPost(response.data)
                setError("")
            })
            .catch(()=> {
                setLoading(false)
                setPost({})
                setError("some thing went wrong!")
            });
      }, []);

  return (
    <>
        <div>DataFetchingOne</div>
        {
            loading ? "loading" : post.title
        }
        {
            error ? error : null
        }

    </>
  )
}

export default DataFetchingOne