import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToOrder } from 'actions/orderActions';
import { setNotification } from 'actions/notificationActions';
import './orderItem.css'
import { FaPlus, FaMinus } from "react-icons/fa";

const OrderItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const increaseQuantity = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  }
  const decreaseQuantity = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const addOrder = (event) => {
    event.preventDefault();
    if (quantity < 1) {
      alert("Quantity is 0");
    } else {
      const newItem = { ...item, quantity }
      dispatch(addToOrder(
        newItem
      ))
      dispatch(setNotification(`${quantity} orders of ${item.name} has been added!`, 2000));
      setQuantity(0);
    }
  }
  return (
    <>
      <div className="order-item-container">
        <div className="order-item-text">
          {item.id} {item.name} - {item.price}
        </div>
        <div className="order-quantity-text">
          <button className="decrease-quantity-button" disabled={quantity < 1} onClick={decreaseQuantity}><FaMinus className="decrease-icon" /></button>
          {quantity}
          <button className="increase-quantity-button" onClick={increaseQuantity}><FaPlus className="increase-icon" /></button>
        </div>
      </div>
      <div className="add-button-container">
        {quantity ? <button className="add-to-order-button" onClick={addOrder}>Add to Order</button> : null}
      </div>
    </>
  )
}

export default OrderItem