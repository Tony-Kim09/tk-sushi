import React from 'react'
import './menuItem.css'

const MenuItem = ({ name, price }) => {
  return (
    <div className="menu-item">
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
    </div>
  )
}

export default MenuItem
