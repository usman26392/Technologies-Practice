import Image from "next/image";
import styles from "./singlePage.module.scss";
import Menu from "@/components/menu/Menu";
import Button from "@/small-components/button/Button";
import btnStyle from "@/small-components/button/Button.module.scss"


function page() {
  return (
    <section className="section-my">
      <div className={`${styles['blog-row']}`} >
        <div className={`${styles['blog-col']} ${styles['blog-col--left']}  `} >
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi?</h2>
          <div className={`${styles['author-figure']}`} >
            <div className={`${styles['figure']} element-circle`} >
              <Image src="/p1.jpeg" alt="sea" fill />
            </div>
            <div className={`${styles['author-name-wrapper']}`} >
              <h5>Muhammad Rehan</h5>
              <span className={`${styles['date']}`} >20-Nov-23</span>
            </div>
          </div>
        </div>
        <div className={`${styles['blog-col']}`} >
            <div className={`${styles['main-figure']} border-rounded `} >
                <Image src="/p1.jpeg" alt="sea" fill />
            </div>
        </div>
      </div>
      <div className={`${styles['post-description-row']} section-my `} >
        <div className={`${styles['post-description-col']} ${styles['post-description-col--left']}`}>
            <div className="description">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, consequatur.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae inventore magni adipisci vero ad facilis aspernatur consectetur cum corporis?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque amet dolorum enim eum doloremque modi sed ipsum delectus temporibus maxime?</p>
            </div>
            <div className="comment-section">
                <div className={`${styles['comment-box']}`} >
                    <div className={`${styles['text-area']}`} >
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className={`${btnStyle['btnn']}`}>
                        <Button content="submit" />
                    </button>
                </div>
                <div className="comments-wrapper">
                    <div className="comment-card">
                        <div className={`${styles['avatar__name']}`} >
                            <div className={`${styles['avatar']} element-circle`} >
                                <img src="/p1.jpeg" alt="avatar" fill="true" className="img-hack" />
                            </div>
                            <div className={`${styles['commentor']}`} >
                                <h5>Muhammad Farhan</h5>
                                <span className="date">20-Nov-23</span>
                            </div>
                        </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor eveniet accusantium ad necessitatibus id?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="post-description-col">
            <Menu/>
        </div>
      </div>
    </section>
  );
}

export default page;
