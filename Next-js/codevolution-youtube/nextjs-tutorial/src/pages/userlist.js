import Button from "@/components/Button"
import User from "@/components/User"
import Link from "next/link"



const userlist = ({users}) => {
  return (
    <>
        <h1>userlist</h1>
        <hr></hr>
        <hr></hr>
        <br></br>
        {
            users.map(function(user) {
                return (
                    // <div key={user.id}>
                    //     <h3> {user.name} </h3>
                    //     <h4>{user.username} </h4>
                    //     <br></br>
                    // </div>
                    // or
                    <User  singleUser = {user} key={user.id} />
                )
            })
        }
        {
            console.log(users)
        }
        <Link href="/" >go to home</Link>

        <br></br>
        <Button text="go to" cssClass="secondary-btn" />

    </>
  )
}

export default userlist


// example of static generation: with external data
// fetch data from api end point.
// 1. getStaticProps function runs only on the server side.
// 2. this function will never run on client-side.
// 3. you can write server-side code directly in getStaticProps.
// 4. getStaticProps is allowed only in a page component and cannot be run from a regular component file.
// ( it is only for pre-rendering and not client-side data fetching )
// 5. getStaticProps should return an object and object should contain a props key which is an object.
// 6. getStaticProps will run at build time.
//  ( if development mode: runs on every request)

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();    
    return {
        props: {
            users: data,
        }
    }
}


