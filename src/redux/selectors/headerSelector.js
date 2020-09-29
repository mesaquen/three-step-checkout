import {createSelector} from 'reselect'

const selectHeader = state => state.header

export const selectHeaderOptions = createSelector([selectHeader], header => header)    