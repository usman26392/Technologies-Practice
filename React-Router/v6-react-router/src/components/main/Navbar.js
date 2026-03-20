
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css";


const Navbar = () => {
    let activeClassName = "active_link";

  return (
    <nav>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/bl">Blog</Link>
            </li>
        </ul> */}
        {/* NavLink */}
        <ul>
            <li>
                <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" 
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >About</NavLink>
            </li>
            <li>
                {/* <Link ></Link> */}
                <NavLink to="/bl"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >Blog</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar