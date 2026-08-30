
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text-center mb-4'>CRUD with fake API</h1>
      <div className="row">
        <div className="col-lg-6">
          <form action="">
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input type="text" className="form-control" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email"/>
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <div>
                    <i  title="view" className="bi bi-eye px-2">
                      {/* <NavLink  to={`/view/${id}`}/> */}
                    </i>
                    <i  title="edit" className="bi bi-pencil px-2">
                      {/* <NavLink  to={`/edit/${id}`}/> */}
                    </i>
                    <i title="delete" className="bi bi-trash px-2" 
                      onClick={()=> {
                        // del(id)
                      }}
                      ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
