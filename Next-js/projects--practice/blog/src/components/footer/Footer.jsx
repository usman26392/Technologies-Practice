import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";




function Footer() {
  return (
    <footer className={`${styles['footer']}`}>
      <div className={`${styles['footer-left-panel']}`} >
        <div className="logo-title">
          <h4>Muhammad Usman</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore
          modi at dolorem atque quisquam sequi deleniti rerum doloribus.
          Distinctio!
        </p>
        <ul className={`${styles['social-links']}`} >
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
      <div className={`${styles['footer-right-panel']}`} >
        <div className="links-col">
          <h4>Links</h4>
          <ul>
            <li>
              <Link href="">HomePage</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="tags-col">
          <h4>Tags</h4>
          <ul>
            <li>
              <Link href="">style</Link>
            </li>
            <li>
              <Link href="">fashion</Link>
            </li>
            <li>
              <Link href="">coding</Link>
            </li>
            <li>
              <Link href="">travel</Link>
            </li>
          </ul>
        </div>
        <div className="social-col">
          <h4>social</h4>
          <ul>
            <li>
              <Link href="">facebook</Link>
            </li>
            <li>
              <Link href="">instagram</Link>
            </li>
            <li>
              <Link href="">tiktok</Link>
            </li>
            <li>
              <Link href="">youtube</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
