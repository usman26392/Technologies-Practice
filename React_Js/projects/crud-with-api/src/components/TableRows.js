
import { Link, NavLink } from "react-router-dom";

const StudentRows = ({id, StName, stEm, del}) => {
  return (
    <>
      <tr>
        <td scope="row">{id}</td>
        <td>{StName}</td>
        <td>{stEm}</td>
        <td>
          <div>
            <i  title="view">
                <NavLink className="bi bi-eye px-2 text-black" to={`/view/${id}`}/>
            </i>
            <i  title="edit">
                <NavLink className="bi bi-pencil px-2 text-black" to={`/edit/${id}`}/>
            </i>
            <i className="bi bi-trash px-2" 
              title="delete"
              onClick={()=> {
                del(id)
              }}
              ></i>
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentRows;
