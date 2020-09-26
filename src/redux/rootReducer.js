import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import shopReducer from './reducers/shopReducer'

export default combineReducers({
  shop: shopReducer,
  cart: cartReducer,
})
