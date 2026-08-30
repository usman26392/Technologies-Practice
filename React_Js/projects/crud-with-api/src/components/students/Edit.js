import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const Edit = () => {
  const { id } = useParams();
  console.log(id)
  const history = useNavigate();
  const [student, setStudent] = useState({
        studentName: '',
        email: ''
    });

  useEffect(()=> {
    getSingleData();
  },[]);
  
  // yey function axios k through request bayjay ga.
  async function getSingleData() {
    try {
      const studentArr = await axios.get(`http://localhost:3333/students/${id}`)
      // console.log(studentArr.data)
      setStudent(studentArr.data)
      // console.log(student.studentName)
    } catch (error) {
      console.log(error)
    }
  }

  function textFieldChange(env) {
    setStudent({
        ...student,
        [env.target.name]: env.target.value
    })
    console.log(env.target.value)
    console.log(student)   
  }

  function backToHome(e) {
    e.preventDefault();
    history('/');
  }

  // for setting data
  async function formSubmit(env) {
    env.preventDefault()
    try {
        await axios.put(`http://localhost:3333/students/${id}`, student)
    } catch (error) {
        console.log(error)
    }
}




  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="form-wrapper text-center">
          <h2>Edit Student</h2>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="ID"
                    disabled
                    defaultValue={student.id}
                    onChange={(e)=> {
                      textFieldChange(e)
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Student's Name"
                    name="studentName"
                    defaultValue={student.studentName}
                    onChange={(e)=> {
                      textFieldChange(e)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Student's email"
                required
                name="email"
                defaultValue={student.email}
                onChange={(e)=> {
                  textFieldChange(e)
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-uppercase w-100"
              onClick={(e)=> {
                formSubmit(e)
              }}
              >update
            </button>
          </form>
          <div className="text-center my-5">
            <button className="btn btn-primary" 
              onClick={(e)=> {
                backToHome(e)
              }}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
