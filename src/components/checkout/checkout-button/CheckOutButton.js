import React from 'react'
import { useHistory } from 'react-router'
import './checkOutButton.css'

const CheckOutButton = ({ itemListLength }) => {
  const history = useHistory();

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
