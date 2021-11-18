import React from 'react'
import './menuItem.css'

const MenuItem = ({ id, name, price }) => {
  return (
    <div className="menu-item">
      <div className="item-name">{id} {name}</div>
      <div className="item-price">${price}</div>
    </div>
  )
}

export default MenuItem