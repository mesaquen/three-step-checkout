import { ADD_TO_CART } from '../types'

const initialState = {
  item: null,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        item: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
