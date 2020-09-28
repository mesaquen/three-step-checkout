import { SEARCH_ITEMS, POPULATE_ITEMS } from '../types'

const initialState = {
    items: [],
    generalSearch: null
}
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_ITEMS:
      return {
        items: action.payload,
      }
      case SEARCH_ITEMS: 
      return {
        ...state,
        generalSearch: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
