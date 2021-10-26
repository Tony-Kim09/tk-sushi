import React from 'react'
import './aboutUs.css'
import AboutUsPicture from '../../assets/single-sushi.jpg'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img className="about-us-picture" src={AboutUsPicture} alt="Single-Sushi" />
      <div className="about-us-text-container">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione quam, nemo ex laborum iure possimus, dolore ipsa culpa inventore praesentium voluptatem a fugiat reprehenderit omnis id iusto recusandae ducimus commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione quam, nemo ex laborum iure possimus
        </p>
      </div>
    </div>
  )
}

export default AboutUs
