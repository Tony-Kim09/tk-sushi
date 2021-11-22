import React from 'react'
import { useSelector } from 'react-redux'
import './notification.css'
import { FiCheckCircle } from 'react-icons/fi';
const Notification = () => {

  const notification = useSelector(state => state.notification);

  return (
    <>
      {notification ?
        <div className={notification ? "notification-container" : null}>
          <FiCheckCircle className="notification-success" /> {notification.message}
        </div>
        : null
      }

    </>
  )
}

export default Notification
