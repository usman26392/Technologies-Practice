
import './IMAGINATION.css'
import imagination from '../../assets/images/imagination.png'


const IMAGINATION = () => {
  return (
    <section className="imagination c-py">
        <div className="container">
            <div className="imagination-row">
                <div className="imagination__col">
                    <div className="imagination__figure">
                        <img src={imagination} alt="imagination figure" />
                    </div>
                </div>
                <div className="imagination__col">
                    <div className="imagination__text-content">
                        <p>Request Early Access to Get Started</p>
                        <h3 className='gradient-text'>The possibilities are beyond your imagination</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ratione ipsam perferendis excepturi porro autem itaque ab alias reiciendis harum.</p>
                        <a href="/">Request Early Access to Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IMAGINATION