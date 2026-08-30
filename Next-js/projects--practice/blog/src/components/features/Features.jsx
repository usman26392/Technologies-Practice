import Link from "next/link"
import styles from "./Features.module.scss"
import Image from "next/image"
import Button from "@/small-components/button/Button"
import btnStyle from "../../small-components/button/Button.module.scss"


function Features() {
  return (
    <section className="section-my">
      <h1><strong>Hey Muhammad Usman</strong>,Discover my stories and creative ideas</h1>
      <div className={`${styles['feature-row']}`} >
        <div className={`${styles['feature__col']}`}>
          <div className={`${styles['feature-figure']} border-rounded`}>
            <Image src="/p1.jpeg" 
              alt="feature" 
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className=""></Image>
          </div>
        </div>
        <div className={`${styles['feature__col']}`}>
          <div className="feature__description">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, nobis!</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat quia facilis, dignissimos nihil reprehenderit deserunt optio minima ut rem.</p>
            <Link href="/" className={`${btnStyle['btnn']}`}>
              <Button content="read more" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features