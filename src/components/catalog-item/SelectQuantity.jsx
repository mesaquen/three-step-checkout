import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { QUANTITY_AVAILABLE } from '../../Constants'

const SelectQuantity = props => {
  return (
    <Select {...props}>
      {QUANTITY_AVAILABLE.map(quantity => (
        <MenuItem key={`item-${props.id}-${quantity}`} value={quantity}>
          {quantity}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectQuantity
