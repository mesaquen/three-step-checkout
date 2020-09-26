import { ADD_TO_CART, POPULATE_ITEMS } from "../types"

export const addToCart = (payload) => ({
        type: ADD_TO_CART,
        payload
})

export const populateItems = (payload) => ({
    type: POPULATE_ITEMS,
    payload
})