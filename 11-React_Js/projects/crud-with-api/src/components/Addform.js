
import axios from "axios";
import { useState } from "react";



const Addform = () => {
    const [student, setStudent] = useState({
        studentName: '',
        email: ''
    });

    function textFieldChange(env) {
        setStudent({
            ...student,
            [env.target.name]: env.target.value
        })
        console.log(env.target.value)
        console.log(student)   
    }
    
    // for setting data
    async function formSubmit(env) {
        env.preventDefault()
        try {
            await axios.post(`http://localhost:3333/students`, student)
        } catch (error) {
            console.log(error)
        }
    }
    
    

  return (
    <div className="col-lg-6">
        <div className="form-wrapper text-center">
            <h2>Add Student</h2>
            <form>
                <div className="mb-3">
                    <input type="text"
                         className="form-control" 
                         placeholder="Student's Name"
                         name="studentName"
                         onChange={(e)=> {
                            textFieldChange(e)
                         }} />
                </div>
                <div className="mb-3">
                    <input type="email"
                         className="form-control" 
                         placeholder="Student's email" 
                         required
                         name="email"
                         onChange={(e)=> {
                            textFieldChange(e)
                         }} />
                </div>
                <button type="submit" 
                    className="btn btn-primary text-uppercase w-100"
                    onClick={(e)=> {
                        formSubmit(e)             
                    }}
                    >add</button>
            </form>
        </div>
    </div>
  )
}

export default Addform