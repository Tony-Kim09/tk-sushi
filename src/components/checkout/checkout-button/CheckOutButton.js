import { resetCart } from 'actions/orderActions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './checkOutButton.css'

const CheckOutButton = () => {
  const history = useHistory();
  const itemList = useSelector(state => state.orders);
  const itemListLength = itemList.length;
  const dispatch = useDispatch();

  const checkOutButtonHandler = () => {
    dispatch(resetCart());
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
