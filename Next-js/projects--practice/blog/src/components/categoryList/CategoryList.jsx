import Image from "next/image"
import Link from "next/link"
import styles from "./CategoryList.module.scss"


function CategoryList() {
  return (
    <section className="section-my">
      <h2>Popular category list</h2>
      <div className={`${styles['category-list']}`} >
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightblue  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightpink  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightgreen  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightsalmon  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightcyan  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        <div className={`${styles['category-list__item']}`} >
          <Link href="" className={`${styles['category-list__card']} bg-lightgoldenrodyellow  `} >
            <div className={`${styles['figure']}`} >
              <Image src="/style.png" alt="" width={32} height={32} priority />
            </div>
            <span className={`${styles['title']}`} >style</span>
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default CategoryList