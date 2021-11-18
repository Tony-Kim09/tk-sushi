import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import { photos } from 'constants/constants'

import './menuSection.css'

const MenuSection = ({ section, items, index }) => {
  return (
    <>
      <div className={`menu-header-image ${section.toLowerCase()}`}>
        <p className="menu-header-text">{section}</p>
      </div>
      {index % 2 > 0 ?
        <>
          {/* Image Appears on Left Side for Odd Index */}
          <div className="menu-section-container ">
            <img className="menu-itemlist-image odd-format-image" src={photos[1]} alt="Food Pic" />
            <div className="menu-itemlist-container">
              {items.map((item, index) => {
                return <MenuItem key={index} id={item.id} name={item.name} price={item.price} />
              })}
            </div>
          </div>
        </>
        :
        <>
          {/* Image Appears on Right Side for Even Index */}
          <div className="menu-section-container">
            <div className="menu-itemlist-container">
              {items.map((item, index) => {
                return <MenuItem key={index} id={item.id} name={item.name} price={item.price} />
              })}
            </div>
            <img className="menu-itemlist-image even-format-image" src={photos[2]} alt="Food Pic" />
          </div>
        </>
      }

    </>
  )
}

export default MenuSection
