import StudentRows from "./TableRows";
import axios from "axios";
import { useState, useEffect } from "react";


const StudentTable = () => {
  const [student, setStudent] = useState([]);
  useEffect(()=> {
    getAllData();
  },[setStudent]);
  
  // yey function axios k through request bayjay ga.
  async function getAllData() {
    try {
      const studentArr = await axios.get('http://localhost:3333/students')
      // console.log(studentArr)
      // console.log(studentArr.data)
      // console.log(studentArr.data[0].email)
      setStudent(studentArr.data)
      // console.log(student)
    } catch (error) {
      console.log(error)
    }
  }
  
  // delete item
  async function Del(id) {
    await axios.delete(`http://localhost:3333/students/${id}`)
    const oldItem = [...student];
    const restItem = oldItem.filter((elm, i)=> {
      // console.log(i)
      i++;
      console.log(i)
      return (
        elm.id !== id
        )
      })
      console.log(id)
    setStudent(restItem)
    console.log(student)
  }



  return (
    <div className="col-lg-6">
      <div className="table-wrapper">
        <h2 className="text-center">Student's List</h2>
        <table className="table bg-white m-0">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              student.map((el, idx)=> {
                return (
                  <StudentRows id={el.id} StName={el.studentName} stEm={el.email} key={el.id} del={Del} />                      
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
