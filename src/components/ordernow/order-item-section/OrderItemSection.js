import React from 'react'
import OrderItem from '../order-item/OrderItem'
import './orderItemSection.css'

const OrderItemSection = ({ title, items }) => {
  return (
    <div className="item-section-container">
      <h2 className="item-section-title">{title}</h2>
      <div className="section-items">
        {items.map((item, index) => {
          return <OrderItem key={index} item={item} />
        })}
      </div>
    </div>
  )
}

export default OrderItemSection
