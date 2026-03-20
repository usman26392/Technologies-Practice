
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <nav>
          <Link to="/about">go to About</Link>
        </nav>
      </main>
    </>
  )
}

export default Home