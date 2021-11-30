import React from 'react'
import './restaurantServices.css'
import { useHistory } from "react-router-dom";

const RestaurantServices = () => {

  const history = useHistory();

  const redirectButton = (event) => {
    history.push("/order-now");
    window.scrollTo(0, 0);
  }

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <h2 className="services-subtitle">Dine-in</h2>
      <p className="dine-in-text">Monday - Sunday</p>
      <p className="dine-in-text"><i>4pm to 11pm</i></p>

      {/* Take-Out Section */}
      <h2 className="services-takeout-title">Take-out</h2>
      <button className="services-takeout-button" onClick={redirectButton}>Order Now</button>

    </div>
  )
}

export default RestaurantServices;