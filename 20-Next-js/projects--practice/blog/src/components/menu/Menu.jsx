import EditorCard from "@/small-components/editor-pick-card/EditorCard";
import MenuCategories from "../menucategories/MenuCategories";
import styles from "./Menu.module.scss"



function Menu() {
  return (
    <section className="right-panel-post">
      <h2>
        <span>what is hot</span> <br /> Most popular{" "}
      </h2>
      <EditorCard mostpopular={true} />
      <EditorCard mostpopular={true} />
      <EditorCard mostpopular={true} />
      <EditorCard mostpopular={true} />
      <EditorCard mostpopular={true} />
      <hr />
      <h2>
        <span>Discover by topic </span> <br /> Categories{" "}
      </h2>
      <div className={`${styles['menu-category-wrapper']}`} >
        <MenuCategories category="style" classValue="bg-lightblue" />
        <MenuCategories category="fashion" classValue="bg-lightpink"  />
        <MenuCategories category="food" classValue="bg-lightgreen" />
        <MenuCategories category="travel" classValue="bg-lightsalmon" />
        <MenuCategories category="culture" classValue="bg-lightcyan" />
        <MenuCategories category="coding" classValue="bg-lightgoldenrodyellow" />
      </div>
      <hr />
      <h2>
        <span>chosen by the editor </span> <br /> Editor Pick{" "}
      </h2>
      <EditorCard />
      <EditorCard />
      <EditorCard />
      <EditorCard />
      <EditorCard />
    </section>
  );
}

export default Menu;
