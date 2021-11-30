import React from 'react'
import { useHistory } from 'react-router';
import './introPage.css';

const IntroPage = () => {
  const history = useHistory();

  const redirectButton = (event) => {
    history.push("/menu");
    window.scrollTo(0, 0);
  }
  return (
    <div className="intro-container">
      <h1 className="intro-text">Become Immersed in Traditional Japanese Culture</h1>
      <button className="intro-menu-button" onClick={redirectButton}>See Menu</button>
    </div>
  )
}

export default IntroPage;