
import './BLOG.css'
import mainblog from '../../assets/images/main-blog.png';
import smallblog1 from '../../assets/images/blog-small-1.png';
import smallblog2 from '../../assets/images/blog-small-2.png';
import smallblog3 from '../../assets/images/blog-small-3.png';
import smallblog4 from '../../assets/images/blog-small-4.png';


const BLOG = () => {
  return (
    <section className="blog c-py">
        <div className="container">
            <h2 className="blog-title gradient-text">A lot is happening,We are blogging about it.</h2>
            <div className="blog-row">
                <div className="blog-col-40">
                    <div className="blog-card">
                        <div className="blog-card__figure">
                            <img src={mainblog} alt="blog card" />
                        </div>
                        <div className="blog-card__text-content">
                            <div>
                                <span>Sep 26, 2021</span>
                                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                            </div>
                            <a href="/">Read Full Article</a>
                        </div>
                    </div>
                </div>
                <div className="blog-col-60">
                    <div className="blog-row-right">
                        <div className="blog-col-50">
                            <div className="blog-card">
                                <div className="blog-card__figure">
                                    <img src={smallblog1} alt="blog card" />
                                </div>
                                <div className="blog-card__text-content">
                                    <div>
                                        <span>Sep 26, 2021</span>
                                        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                                    </div>
                                    <a href="/">Read Full Article</a>
                                </div>
                            </div>                                             
                        </div>
                        <div className="blog-col-50">
                            <div className="blog-card">
                                <div className="blog-card__figure">
                                    <img src={smallblog2} alt="blog card " />
                                </div>
                                <div className="blog-card__text-content">
                                    <div>
                                        <span>Sep 26, 2021</span>
                                        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                                    </div>
                                    <a href="/">Read Full Article</a>
                                </div>
                            </div>                                             
                        </div>
                        <div className="blog-col-50">
                            <div className="blog-card">
                                <div className="blog-card__figure">
                                    <img src={smallblog3} alt="blog card" />
                                </div>
                                <div className="blog-card__text-content">
                                    <div>
                                        <span>Sep 26, 2021</span>
                                        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                                    </div>
                                    <a href="/">Read Full Article</a>
                                </div>
                            </div>                                             
                        </div>
                        <div className="blog-col-50">
                            <div className="blog-card">
                                <div className="blog-card__figure">
                                    <img src={smallblog4} alt="blog card " />
                                </div>
                                <div className="blog-card__text-content">
                                    <div>
                                        <span>Sep 26, 2021</span>
                                        <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                                    </div>
                                    <a href="/">Read Full Article</a>
                                </div>
                            </div>                                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BLOG