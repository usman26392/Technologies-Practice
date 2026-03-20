
import ourpartner1 from '../../assets/images/our-partner-1.svg'
import ourpartner2 from '../../assets/images/our-partner-2.svg'
import ourpartner3 from '../../assets/images/our-partner-3.svg'
import ourpartner4 from '../../assets/images/our-partner-4.svg'
import ourpartner5 from '../../assets/images/our-partner-5.svg'
import './Partners.css';
import LOGOS from '../../small-components/partners-logos/LOGOS'


const ourPartners = [
    {
        partnersImg: `${ourpartner1}`
    },
    {
        partnersImg: `${ourpartner2}`
    },
    {
        partnersImg: `${ourpartner3}`
    },
    {
        partnersImg: `${ourpartner4}`
    },
    {
        partnersImg: `${ourpartner5}`
    },
];


const Partners = () => {
  return (
    <section className="partners">
        <div className="container">
            <div className="partners-row">
                {
                    ourPartners.map((item, index)=> {
                        return (
                            <LOGOS partnersLogos={item.partnersImg} key={index} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Partners