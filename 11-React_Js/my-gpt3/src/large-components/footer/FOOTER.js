
import './FOOTER.css';
import footerlogo from '../../assets/images/footer-logo.svg';


const FOOTER = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-cta c-py">
                <h2 className='gradient-text'>Do you want to step in to the future before others</h2>
                <a href="/" className='transparent-btn' >Request Early Access</a>
            </div>
            <div className="footer-links c-py">
                <div className="footer-links__row">
                    <div className="footer-links__logo">
                        <a href="/">
                            <img src={footerlogo} alt="footer logo" width="118" height="30" />
                        </a>
                        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="footer-links__panel">
                        <div className="footer-links__panel__row">
                            <div className="footer-links__panel__col">
                                <h6>Links</h6>
                                <ul>
                                    <li>
                                        <a href="/">home</a>
                                    </li>
                                    <li>
                                        <a href="/">Social Media</a>
                                    </li>
                                    <li>
                                        <a href="/">Counters</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-links__panel__col">
                                <h6>Company</h6>
                                <ul>
                                    <li>
                                        <a href="/">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-links__panel__col">
                                <h6>Get in touch</h6>
                                <ul>
                                    <li>
                                        <a href="/">Crechterwoord K12 182 DK Alknjkcb</a>
                                    </li>
                                    <li>
                                        <a href="tel:085-132567">085-132567</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@payme.net">info@payme.net</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="right-reserved">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default FOOTER