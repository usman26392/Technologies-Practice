import './Navigation.css';
import logo from '../../assets/images/logo.svg';

const Navigation = () => {
  return (
    <header>
        <div className="container">
            <nav className="gpt3__navbar">
                <a href="/" className="gpt3__navbar__logo">
                    <img src={logo} alt="website logo" width={64} height={17} />
                </a>
                <div className="gpt3__navbar__collapse">
                    <ul className="gpt3__navbar__list">
                        <li className='gpt3__navbar__list__item'>
                            <a href="#home" className='gpt3__navbar__list__link'>Home</a>
                        </li>
                        <li className='gpt3__navbar__list__item'>
                            <a href="#home" className='gpt3__navbar__list__link'>What is GPT?</a>
                        </li>
                        <li className='gpt3__navbar__list__item'>
                            <a href="#home" className='gpt3__navbar__list__link'>Open AI</a>
                        </li>
                        <li className='gpt3__navbar__list__item'>
                            <a href="#home" className='gpt3__navbar__list__link'>Case Studies</a>
                        </li>
                        <li className='gpt3__navbar__list__item'>
                            <a href="#home" className='gpt3__navbar__list__link'>Library</a>
                        </li>
                    </ul>
                </div>
                <div className="gpt3__navbar__cta">
                    <button className='gpt3__navbar__cta__btn orange-btn transparent-btn'>Sign in</button>
                    <button className='gpt3__navbar__cta__btn orange-btn'>Sign up</button>
                </div>

            </nav>
        </div>
    </header>
  )
}

export default Navigation