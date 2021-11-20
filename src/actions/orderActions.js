export const addToOrder = (item) => {
  return {
    type: "ADD_ITEM",
    data: {
      item
    }
  }
}

export const resetCart = () => {
  return {
    type: "RESET_CART"
  }
}