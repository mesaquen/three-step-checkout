import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { SHOES_SIZES } from '../../Constants'

const SelectShoeSize = (props) => {
  return (
    <Select {...props}>
      {SHOES_SIZES.map(number => (
        <MenuItem key={`item-${props.id}-${number}`} value={number}>
          {number}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectShoeSize
