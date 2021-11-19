import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addToOrder } from 'actions/orderActions';
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
        <button className={quantity !== 0 ? "add-to-order-button" : "hide-button"} onClick={addOrder}>Add to Order</button>
      </div>
    </>
  )
}

export default OrderItem