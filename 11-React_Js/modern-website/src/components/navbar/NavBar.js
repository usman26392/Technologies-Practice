import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import { useState } from 'react';

const NavBar = () => {
  // react hook
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <a href='/' className="gpt3__navbar__logo">
          <img src={logo} alt="website logo" />
        </a>
        <nav className="gpt3__navbar__container">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">What is GPT3</a>
            </li>
            <li>
              <a href="#home">Open AI</a>
            </li>
            <li>
              <a href="#home">Case Studies</a>
            </li>
            <li>
              <a href="#home">Library</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="gpt3__navbar__sign">
        <a href="">Sign In</a>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar__menu">
        {
          toggleMenu 
            ? <RiCloseLine 
                color='#fff' 
                size={27} 
                onClick={()=> setToggleMenu(false)}  />
            : <RiMenu3Line 
              color='#fff' 
              size={27} 
              onClick={()=> setToggleMenu(true)}  />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar