import axios from "axios";
import { useEffect, useReducer } from "react"



// example: data fetching with useReducer()
const initialState = {
    loading: true,
    error: "",
    "post": {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS": 
            return {
                loading: false,
                error: "",
                post: action.payload
            }
        case "FETCH_ERROR": 
            return {
                loading: false,
                error: "something went wrong!",
                post: {}
            }
        default:
            return state

    }
}


const DataFetchingTwo = () => {
    const [newState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/12`)
            .then( response => {
                dispatch( {
                    type: "FETCH_SUCCESS",
                    payload: response.data
                } )
            })
            .catch(()=> {
                dispatch({
                    type: "FETCH_ERROR"
                } )
            });
      }, []);

  return (
    <>
        <div>DataFetchingTwo</div>
        {
           newState.loading ? "loading" : newState.post.title
        }
        {
           newState.error ? newState.error : null
        }

    </>
  )
}

export default DataFetchingTwo