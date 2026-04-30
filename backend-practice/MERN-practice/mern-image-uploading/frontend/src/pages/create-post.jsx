
import axios from "axios"
import { useNavigate } from "react-router";




export default function CreatePost() {

    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        // console.log(formData)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res)=> {
            // console.log(res);
            navigate("/posts")

        })
        .catch((error)=> {
            console.log(error)
        })
        
    }




    return (
        <section className='create-post-section' >
            <h1>Create post</h1>

            <form onSubmit={handleSubmit}>

                <input type="file" name="image" accept="image/*" />
                <input type="text" name='caption' placeholder='Enter caption' required />
                <button type='submit' >Submit</button>

            </form>

        </section>
    )
}
