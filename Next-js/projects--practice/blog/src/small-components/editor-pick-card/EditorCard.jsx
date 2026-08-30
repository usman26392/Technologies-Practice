import Image from "next/image";
import Link from "next/link";
import styles from "./EditorCard.module.scss";

function EditorCard(props) {
  return (
    <Link href="" className={`${styles["panel"]}`}>
      {props.mostpopular ? (
        <></>
      ) : (
        <div className={`${styles["figure"]} border-rounded`}>
          <Image src="/p1.jpeg" alt="" width={100} height={100} priority />
        </div>
      )}

      <div className={`${styles["desciption"]}`}>
        <h3 className={`${styles["label"]}`}>Travel</h3>
        <h4 className={`${styles["main-title"]}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
          quod.
        </h4>
        <div className={`${styles["authors"]}`}>
          <span className={`${styles["name"]}`}>John Doe</span>
          <span className={`${styles["date"]}`}>- 01-09-2023 </span>
        </div>
      </div>
    </Link>
  );
}

export default EditorCard;
