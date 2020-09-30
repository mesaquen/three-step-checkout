import { SET_HEADER_TITLE } from '../types'

const { SCREENS } = require('../../Constants')

const initialState = {
  title: SCREENS.SHOP,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TITLE:
        return {
            ...state,
            title: action.payload
        }
    default:
      return state
  }
}
