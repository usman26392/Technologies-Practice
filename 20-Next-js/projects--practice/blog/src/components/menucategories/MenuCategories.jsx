import Link from "next/link"

import styles from "./MenuCategories.module.scss"


function MenuCategories({category, classValue}) {
  return (
    <Link href="" className={`${styles['category-button']} ${classValue}  `}>{category}</Link>
  )
}

export default MenuCategories