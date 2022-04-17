import './Hero.css';
import hero from '../../assets/images/hero.png'
import people1 from '../../assets/images/people-1.png'
import people2 from '../../assets/images/people-2.png'
import people3 from '../../assets/images/people-3.png'
import people4 from '../../assets/images/people-4.png'
import people5 from '../../assets/images/people-5.png'



const Hero = () => {
  return (
      <section className='hero-sec'>
          <div className="container h-100">
            <div className='hero h-100'>
                <div className="hero-text">
                    <h1 className="hero-title gradient-text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p className='hero-para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <form action="" className="hero-form">
                        <input type="email" placeholder='Your Email Address'/>
                        <input type="submit" className='orange-btn' value='Get Started'/>
                    </form>
                    <div className="hero-peoples">
                        <div className="hero-peoples__figures">
                            <div className="hero-peoples__item">
                                <img src={people1} alt="image of people requested access" width='36' height='36' />
                                <img src={people2} alt="image of people requested access" width='36' height='36' />
                                <img src={people3} alt="image of people requested access" width='36' height='36' />
                                <img src={people4} alt="image of people requested access" width='36' height='36' />
                                <img src={people5} alt="image of people requested access" width='36' height='36' />
                                <div className="hero-peoples__item__counts">
                                    <span>1.6k+</span>
                                </div>
                            </div>
                            <p className='hero-peoples__desc'>1,600 people requested access a visit in last 24 hours</p>
                        </div>
                    </div>
                </div>
                <div className="hero-figure">
                    <img src={hero} alt="hero image" width='2824' height='2852'  />
                </div>
            </div>
          </div>
      </section>
  )
}

export default Hero