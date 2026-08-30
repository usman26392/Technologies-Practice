import Image from "next/image"
import Link from "next/link"
import styles from "./PostCard.module.scss";
import Button from "../button/Button";
import btnStyle from "../button/Button.module.scss"

function PostCard() {
  return (
    <div className={`${styles['panel']}`} >
        <div className={`${styles['figure']}`} >
            <Image src="/p1.jpeg" alt="" width={320} height={400} priority />
        </div>
        <div className={`${styles['body']}`} >
            <div className={`${styles['header']}`} >
                <span className={`${styles['date']} gray`}>15-Nov-23 -</span>
                <span className="lightsalmon">culture</span>
            </div>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, aliquid?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat tempora maiores praesentium at reiciendis cum recusandae. Corrupti aliquid ratione repudiandae quaerat, molestias error deserunt nihil ipsum maiores sint provident!</p>
            <Link href="" className={`${btnStyle['btnn']}`}>
                <Button content="Read more" />
            </Link>
        </div>
    </div>
  )
}

export default PostCard