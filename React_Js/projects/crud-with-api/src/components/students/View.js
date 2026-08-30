
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



const View = () => {
  const { id } = useParams();
  console.log(id)

  const [student, setStudent] = useState([]);

  useEffect(()=> {
    getSingleData();
  },[id]);
  
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

  const history = useNavigate();

  function backToHome(e) {
    e.preventDefault();
    history('/');
  }

  

  
  return (
    <div>
      <table className="table bg-white m-0">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> {student.id} </th>
            <td> { student.studentName } </td>
            <td> { student.email } </td>
            {/* <td>
              <div>
                <i className="bi bi-eye px-2" title="view"></i>
                <i className="bi bi-pencil px-2" title="edit"></i>
                <i className="bi bi-trash px-2" title="delete"></i>
              </div>
            </td> */}
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-5">
        <button className="btn btn-primary"
          onClick={backToHome}
        >Back to Home</button>
      </div>
    </div>
  );
};

export default View;
