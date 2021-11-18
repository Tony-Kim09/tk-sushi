import orderReducer from 'reducer/orderReducer'
import { createStore } from 'redux'

const store = createStore(
  orderReducer
)

export default store;