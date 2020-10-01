import { createSelector } from 'reselect'
import { selectShop } from './shopSelectors'

const selectCart = state => state.cart

const filterById = (arr, id) => {
  if (id) {
    return arr.find(item => item.id === id)
  }
  return null
}

export const selectItem = createSelector(
  selectShop,
  selectCart,
  (shop, cart) => {
    const shopItem = filterById(shop.items, cart.item?.id) ?? {}
    return {
      ...shopItem,
      ...cart.item,
    }
  },
)

export const selectDeliveryDetails = createSelector(
  [selectCart],
  cart => cart.delivery,
)

export const selectOrderDetails = createSelector(
  [selectCart],
  ({ subtotal, selectedPaymentMethod, activeStep }) => {
    debugger
    return {
      subtotal,
      selectedPaymentMethod,
      activeStep,
    }
  },
)
