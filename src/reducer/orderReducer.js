const orderReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { id, name, price, quantity } = action.data.item;
      const existingOrder = state.find(x => x.id === id);
      if (existingOrder) {
        existingOrder.quantity += quantity;
        return state.map(item => item.id === existingOrder.id ? existingOrder : item);
      }
      const newOrder = {
        id,
        name,
        price,
        quantity
      };
      return [...state, newOrder];
    default:
      return state;
  }
}

export default orderReducer