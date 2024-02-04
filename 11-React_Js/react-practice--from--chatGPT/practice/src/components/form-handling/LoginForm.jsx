import { useState } from "react"


// topic: form handling

function LoginForm() {
    // State to manage form data
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    // Event handler for input changes
    function handleInput(e) {
        let { name, value } = e.target;
        // console.log(name)
        // console.log(value)
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    // Event handler for form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Your form submission logic using formData
        console.log('Form submitted with data:', formData)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">
                    UserName:
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your user name"
                        value={formData.username}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="">
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInput}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm