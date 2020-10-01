import {
  ADD_TO_CART,
  POPULATE_ITEMS,
  SET_PAYMENT_METHOD,
  SET_ACTIVE_STEP,
} from '../types'

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload,
})

export const populateItems = payload => ({
  type: POPULATE_ITEMS,
  payload,
})

export const setSelectedPaymentMethod = payload => ({
  type: SET_PAYMENT_METHOD,
  payload,
})

export const setActiveStep = payload => ({
  type: SET_ACTIVE_STEP,
  payload,
})
