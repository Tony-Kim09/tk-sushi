import React from 'react'
import { useSelector } from 'react-redux'
import CheckOutButton from '../checkout-button/CheckOutButton';
import './checkOutItems.css'

const CheckOutItems = () => {
  const itemList = useSelector(state => state);
  const itemListLength = itemList.length;

  const grandTotalReducer = (prev, curr) => prev + curr;
  const grandTotalPrice = itemListLength ? itemList.map(item => Number(item.price))
    .reduce(grandTotalReducer) : 0;


  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Ordered Items</h2>
      {
        itemListLength > 0 ?
          itemList.map(item =>
            <div key={item.id} className="checkout-item">{item.name} x{item.quantity}
              <i className="check-out-price">{item.price}</i></div>
          )

          : <div className="no-items-container">No items added yet! <br />
            Click on "Order Now" to add items</div>
      }
      <h3 className={itemListLength > 0 ? "grand-total-price" : "hide-component"}>Grand Total: ${grandTotalPrice}</h3>
      <CheckOutButton itemListLength={itemListLength} />
    </div>
  )
}

export default CheckOutItems
