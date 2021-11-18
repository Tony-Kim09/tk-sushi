import React from 'react'
import OrderItemSection from '../order-item-section/OrderItemSection'
import { menu } from 'constants/constants'
import './orderItemList.css'
import { useHistory } from 'react-router'

const OrderItemList = () => {
  const history = useHistory();
  const checkCartButton = () => {
    history.push('/check-out');
  }

  return (
    <div className="item-list-container">
      {
        menu.map((item, index) => {
          return <OrderItemSection key={index} title={item[0]} items={item[1]} />
        })
      }
      <button className="check-cart-button" onClick={checkCartButton}>Check Cart</button>
    </div>
  )
}

export default OrderItemList