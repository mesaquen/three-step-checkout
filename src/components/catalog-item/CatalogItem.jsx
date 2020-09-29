import React from 'react'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    overFlow: 'hidden',
  },
  thumbnail: props => {
    const radius = theme.shape.borderRadius
    return {
      borderRadius: `${radius}px ${radius}px 0 0`,
      backgroundImage: `url(${props.thumbnail})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: theme.spacing(25),
    }
  },
  infoContainer: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
  },

  button: {
    boxShadow: theme.shadows[0],
  },

  detailLabel: {
    color: theme.palette.grey
  } ,
  priceTag: {
    fontSize: '1.25rem',
    fontWeight: theme.typography.fontWeightBold,
  },
}))

const CatalogItem = ({
  id,
  description,
  thumbnail,
  currency,
  price,
  ...props
}) => {
  const classes = useStyles({ thumbnail })
  return (
    <Paper className={classes.item} {...props}>
      <div className={classes.thumbnail}></div>
      <div className={classes.infoContainer}>
        <Typography className={classes.title}>{description}</Typography>
        <div className={classes.details}>
          <Typography className={classes.detailLabel} >Size</Typography>
          <Typography className={classes.detailLabel}>Quantity</Typography>
        </div>
        <Typography className={classes.priceTag}>$ {price}</Typography>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          fullWidth
        >
          Add to cart
        </Button>
      </div>
    </Paper>
  )
}

export default CatalogItem
