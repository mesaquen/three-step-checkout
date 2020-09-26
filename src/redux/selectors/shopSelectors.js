import { createSelector } from 'reselect'

const selectShop = state => {
  console.log(JSON.stringify(state))
  return state.shop
}

export const itemsSelector = createSelector([selectShop], shop => shop.items)
