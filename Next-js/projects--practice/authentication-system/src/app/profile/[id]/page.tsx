

function UserProfile({params}: any ) {
    return (
      <div className=" flex flex-col items-center justify-center min-h-screen py-2">
          <h1>User Profile <span className=" p-2 rounded bg-orange-400 "> {params.id} </span> </h1>
      </div>
    )
  }
  
  export default UserProfile