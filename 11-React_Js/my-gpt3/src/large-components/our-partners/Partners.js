
import ourpartner1 from '../../assets/images/our-partner-1.svg'
import ourpartner2 from '../../assets/images/our-partner-2.svg'
import ourpartner3 from '../../assets/images/our-partner-3.svg'
import ourpartner4 from '../../assets/images/our-partner-4.svg'
import ourpartner5 from '../../assets/images/our-partner-5.svg'
import './Partners.css'



const Partners = () => {
  return (
    <section className="partners">
        <div className="container">
            <div className="partners-row">
                <div className="partners-col">
                    <div className="partners-item">
                        <img src={ourpartner1} alt="our partners logoes" width='72' height='25' />
                    </div>              
                </div>
                <div className="partners-col">
                    <div className="partners-item">
                        <img src={ourpartner2} alt="our partners logoes" width='97' height='25' />
                    </div>
                </div>
                <div className="partners-col">
                    <div className="partners-item">
                        <img src={ourpartner3} alt="our partners logoes" width='114' height='25' />
                    </div>
                </div>
                <div className="partners-col">
                    <div className="partners-item">
                        <img src={ourpartner4} alt="our partners logoes" width='122' height='25' />
                    </div>
                </div>
                <div className="partners-col">
                    <div className="partners-item">
                        <img src={ourpartner5} alt="our partners logoes" width='85' height='25' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners