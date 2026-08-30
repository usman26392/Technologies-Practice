
import {  NavLink, Outlet } from "react-router-dom"
import "./Layout.css";

const Layout = () => {
    let activeClassName = "active_link";

  return (
    <nav>
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
                <NavLink to="/bl"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >Blog</NavLink>
            </li>
            <li>
                <NavLink to="/posts"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >Post</NavLink>
            </li>
        </ul>
        {/* all components will render here ! with the help 
        of Outlet component caller  */}
        <Outlet/>
    </nav>
  )
}

export default Layout