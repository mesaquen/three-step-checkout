import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'
import shopReducer from './reducers/shopReducer'
import headerReducer from './reducers/headerReducer'

export default combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  header: headerReducer
})
