import Addform from "./Addform";
import StudentTable from "./StudentTable";



const HomeUI = () => {
  return (
    <>
      <h1 className="text-center bg-white p-3 mb-5">
        React CRUD with fake API
      </h1>
      <div className="row">
        <Addform />
        <StudentTable />
      </div>
    </>
  );
};

export default HomeUI;
