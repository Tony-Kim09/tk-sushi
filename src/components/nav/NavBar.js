import React from 'react'
import SushiLogo from '../../assets/SushiLogo.png'
import { Link } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {

  const closeMenu = (event) => {
    event.preventDefault();
    document.body.classList.remove("nav-open");
  }
  const toggleNavList = (event) => {
    event.preventDefault();
    document.body.classList.toggle("nav-open");
  }

  return (
    <div className="nav-bar" id="header">
      <div className="logo">
        <Link className="nav-link" to="/" >
          <img src={SushiLogo} alt="SushiLogo" style={{ width: 50 }} />
        </Link>
      </div>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleNavList}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item" onClick={closeMenu}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link className="nav-link" to="/menu">Menu</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item" onClick={closeMenu}>
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;