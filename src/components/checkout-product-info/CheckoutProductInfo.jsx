import { Typography } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectItem } from '../../redux/selectors/cartSelector'
const CheckoutProductInfo = ({title, classes}) => {
    const item = useSelector(selectItem)
  return (
    <>
      <Typography variant='h5'>{title}</Typography>
      <Typography>{item.description}</Typography>
      <Typography
        className={classes.bodyText}
      >{`x${item.quantity} ${item.color} ${item.size}`}</Typography>
      <Typography className={classes.bodyText}>{`Item #${item.id}`}</Typography>
    </>
  )
}
export default CheckoutProductInfo