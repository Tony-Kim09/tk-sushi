import React from 'react';
import { useState } from 'react';
import { photos } from '../../../constants/constants'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import './gallery.css'

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeToNextImage = (event) => {
    event.preventDefault();
    setCurrentImageIndex((currentImageIndex + 1) % photos.length);
  }

  const changeToPrevImage = (event) => {
    event.preventDefault();
    setCurrentImageIndex((currentImageIndex - 1) < 0 ? photos.length - 1 : currentImageIndex - 1);
  }
  return (
    <div className="gallery-container">
      <img className="gallery-img" src={photos[currentImageIndex]} alt="Gallery" />
      <div className="gallery-button-container">
        <button className="gallery-prev-button" onClick={changeToPrevImage}><BsFillCaretLeftFill /></button>
        <button className="gallery-next-button" onClick={changeToNextImage}><BsFillCaretRightFill /></button>
      </div>
    </div>
  )
}

export default Gallery;