const { POPULATE_ITEMS } = require('../types')
const initialState = {
    items: [{id: 'sample'}]
}
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_ITEMS:
      return {
        items: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
