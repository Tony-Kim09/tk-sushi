let timeResetter;

// The duration is in milliseconds
// Ex: 1000ms = 1second

export const setNotification = (message, duration) => {
  if (timeResetter) {
    clearTimeout(timeResetter);
  }
  return dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      message: {
        message
      }
    })

    timeResetter = setTimeout(() => {
      dispatch({ type: 'RESET_NOTIFICATION' })
    }, duration)
  }
}
