"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./AuthLinks.module.scss";

function AuthLinks() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  let status = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={`${styles["burger-menu"]}`} onClick={()=> (setOpenBurgerMenu(!openBurgerMenu))}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {openBurgerMenu && (
        <div className={`${styles["responsive-menu"]}`}>
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
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
