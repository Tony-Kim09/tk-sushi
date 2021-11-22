const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.message

    case 'RESET_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer