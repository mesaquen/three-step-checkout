import { PAYMENT_METHODS_IDS } from '../../Constants'
import { ADD_TO_CART, SET_ACTIVE_STEP, SET_PAYMENT_METHOD, SET_SUBTOTAL } from '../types'

const initialState = {
  item: null,
  delivery: {
    name: 'John Smith',
    phone: '01312428200',
    address: 'Redwood City, 2000',
  },
  subtotal: 0,
  selectedPaymentMethod: PAYMENT_METHODS_IDS.ONLINE_BANKING,
  activeStep: 1,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        item: action.payload,
      }
    case SET_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload,
      }
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
