'use client'

import Image from "next/image"
import styles from "./Themetoggle.module.scss"
import { useContext, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"

function Themetoggle() {
  const {theme , toggle } = useContext(ThemeContext);

  // console.log(theme)
  // console.log(toggle)

  return (
    <div className={`${styles['theme-toggle']} ${theme == "light"? styles['theme-toggle__light'] : styles['theme-toggle__dark']   }   `} onClick={toggle}   >
      <div className={`${styles['figure-moon']}`}>
        <Image
          src="/moon.png"
          alt="moon"
          width={14}
          height={14}
         />
      </div>
      <div className={`${styles['figure-sun']}`}>
        <Image
          src="/sun.png"
          alt="sun"
          width={14}
          height={14}
         />
      </div>
    </div>
  )
}

export default Themetoggle