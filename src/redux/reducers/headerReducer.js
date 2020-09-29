const { SCREENS } = require('../../Constants')

const initialState = {
  title: SCREENS.SHOP,
  showBackButton: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
