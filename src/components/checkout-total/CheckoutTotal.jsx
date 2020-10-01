import { Typography } from '@material-ui/core'
import React from 'react'

const CheckoutTotal = ({ value, classes }) => {
  return (
    <div className={classes.totalCostContainer}>
      <Typography className={classes.totalCostTitle}>Total cost</Typography>
      <Typography className={classes.bodyText}>Delivery included</Typography>
      <Typography
        variant='h4'
        className={classes.subTotal}
      >{`$${value}`}</Typography>
    </div>
  )
}

export default CheckoutTotal