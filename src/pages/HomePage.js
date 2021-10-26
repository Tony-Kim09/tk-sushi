import React from 'react'
import IntroPage from 'components/homepage/intro-page/IntroPage';
import Gallery from 'components/homepage/gallery/Gallery';
import RestaurantServices from 'components/homepage/services/RestaurantServices';

const HomePage = () => {

  return (
    <>
      <IntroPage/>
      <Gallery/>
      <RestaurantServices/>
    </>
  )

}

export default HomePage;