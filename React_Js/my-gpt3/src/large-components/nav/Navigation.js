import './Navigation.css';
import logo from '../../assets/images/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';
import NAVBAR from '../../small-components/navBar/NAVBAR';


const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
        <div className="container">
            <nav className="gpt3__navbar">
                <a href="/" className="gpt3__navbar__logo">
                    <img src={logo} alt="website logo" width={64} height={17} />
                </a>
                <div className="gpt3__navbar__collapse">
                    <NAVBAR/>
                </div>
                <div className="gpt3__navbar__cta">
                    <button className='gpt3__navbar__cta__btn orange-btn transparent-btn'>Sign in</button>
                    <button className='gpt3__navbar__cta__btn orange-btn'>Sign up</button>
                </div>
                <div className="gpt3__navbar__menu">
                    {
                        toggleMenu 
                        ? <RiCloseLine color='#fff' size={27} onClick= { ()=> { setToggleMenu(false) } } />
                        : <RiMenu3Line color='#fff' size={27} onClick= { ()=> { setToggleMenu(true) } } />
                    }
                    {
                        toggleMenu && (
                            <div className="gpt3__navbar__collapse">
                                <NAVBAR/>
                            </div>
                        )
                    }
                </div>
                

            </nav>
        </div>
    </header>
  )
}

export default Navigation

/**
 * npm install react-icons --save
 */