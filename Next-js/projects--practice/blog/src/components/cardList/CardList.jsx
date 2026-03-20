import PostCard from "@/small-components/post-Card/PostCard"
import styles from "./CardList.module.scss";
import Pagination from "../pagination/Pagination";

function CardList() {
  return (
    <section className={`${styles['left-panel-recent-posts']}`} >
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <Pagination/>
    </section>
  )
}

export default CardList