import { createSelector } from 'reselect'

export const selectShop = state => state.shop

const filterBySearch = ({ items, generalSearch }) => {
  if (generalSearch?.length > 0) {
    return items.filter(item => {
      const data = item.description
        .toLowerCase()
        .includes(generalSearch.toLowerCase())
      return data
    })
  }
  return items
}

export const selectGeneralSearch = createSelector(
  [selectShop],
  shop => shop.generalSearch,
)

export const itemsSelector = createSelector(
  [selectShop],
  ({ items, generalSearch }) => ({ items, generalSearch }),
  filterBySearch,
)
