import { ADD_TO_CART } from '../types'

const initialState = {
  item: null,
  delivery: {
    name: 'John Smith',
    phone: '01312428200',
    address: 'Redwood City, 2000',
  },
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
