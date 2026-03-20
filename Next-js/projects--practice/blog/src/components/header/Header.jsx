
import Link from "next/link"
import styles from "./Header.module.scss"
import Image from "next/image"
import Themetoggle from "../themeToggle/Themetoggle"
import AuthLinks from "../authLinks/AuthLinks"

function Header() {
  return (
    <header className={`${styles['bar']} `} >
        <div className={`${styles['bar__socials-links']}`} >
          <ul>
            <li>
              <a href="">
                <Image 
                  src="/facebook.png"
                  width={24}
                  height={24}
                  alt="social icon"
                   />
              </a>
            </li>
            <li>
              <a href="">
                <Image 
                  src="/instagram.png"
                  width={24}
                  height={24}
                  alt="social icon"
                   />
              </a>
            </li>
            <li>
              <a href="">
                <Image 
                  src="/tiktok.png"
                  width={24}
                  height={24}
                  alt="social icon"
                   />
              </a>
            </li>
            <li>
              <a href="">
                <Image 
                  src="/youtube.png"
                  width={24}
                  height={24}
                  alt="social icon"
                   />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles['bar__logo']}`}>Muhammad Usman</div>
        <div className={`${styles['bar__nav']} ` }>
            <Themetoggle/>
          <nav>
            <ul>
              <li>
                <Link href="/">HomePage</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>
          <AuthLinks/>
        </div>
    </header>
  )
}

export default Header