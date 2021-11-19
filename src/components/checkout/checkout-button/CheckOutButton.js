import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './checkOutButton.css'

const CheckOutButton = () => {
  const history = useHistory();
  const itemList = useSelector(state => state);
  const itemListLength = itemList.length;

  const checkOutButtonHandler = () => {
    history.push("/order-received");
  }

  return (
    <div>
      <button className={itemListLength > 0 ? "checkout-button" : "make-invisible"}
        onClick={checkOutButtonHandler}
      >Check Out</button>
    </div>
  )
}

export default CheckOutButton
