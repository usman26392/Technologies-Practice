import Features from "@/components/features/Features";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";


export default function Home() {
  return (
    <main>
      <Features/>
      <CategoryList/>
      <div className="section-my">
        <h2>Recent Posts</h2>
        <div className="recent-post-main-wrapper">
          <CardList/>
          <Menu/>
        </div>
      </div>
    </main>
  ) 
    
}
