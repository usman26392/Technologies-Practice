
import Link from "next/link"
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <ul className= {`${style['main-nav']} ${style['gray_bg']}   globalClassName`} > 
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="about">About</Link>
            </li>
            <li>
                <Link href="news">News</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar