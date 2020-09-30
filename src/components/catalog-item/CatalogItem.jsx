import React, { useState } from 'react'
import {
  InputBase,
  Button,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import SelectShoeSize from './SelectShoeSize'
import SelectQuantity from './SelectQuantity'

const CustomInput = withStyles(theme => ({
  input: {
    borderRadius: '2rem',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${grey[500]}`,
    color: grey[500],
    padding: '10px 26px 10px 12px',
    width: 50,
    '&:focus': {
      borderColor: '#80bdff',
      borderRadius: '2rem',
    },
  },
}))(InputBase)

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

  details: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  detailLabel: {
    marginRight: theme.spacing(1),
    color: grey[500],
    fontSize: theme.typography.fontSize,
  },
  priceTag: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: '1.25rem',
    fontWeight: theme.typography.fontWeightBold,
  },
  selectShoes: {
    marginRight: theme.spacing(2),
  },
}))

const DEFAULT_SIZE = 41
const DEFAULT_QUANTITY = 1

const CatalogItem = ({
  id,
  description,
  thumbnail,
  currency,
  price,
  onClick,
  ...props
}) => {
  const classes = useStyles({ thumbnail })
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY)
  const [size, setSize] = useState(DEFAULT_SIZE)

  const handleClick = () => {
    onClick({
      id,
      quantity,
      size,
    })
  }
  const handleChangeSize = event => {
    setSize(event.target.value)
  }

  const handleChangeQuantity = event => {
    setQuantity(event.target.value)
  }

  return (
    <Paper className={classes.item} {...props}>
      <div className={classes.thumbnail}></div>
      <div className={classes.infoContainer}>
        <Typography className={classes.title}>{description}</Typography>
        <div className={classes.details}>
          <Typography className={classes.detailLabel}>Size</Typography>
          <SelectShoeSize
            className={classes.selectShoes}
            input={<CustomInput />}
            id={`select-size-${id}`}
            value={size}
            onChange={handleChangeSize}
          />
          <Typography className={classes.detailLabel}>Quantity</Typography>
          <SelectQuantity
            id={`select-quantity-${id}`}
            value={quantity}
            onChange={handleChangeQuantity}
            input={<CustomInput />}
          />
        </div>
        <Typography className={classes.priceTag}>$ {price}</Typography>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleClick}
          fullWidth
        >
          Add to cart
        </Button>
      </div>
    </Paper>
  )
}

export default CatalogItem
