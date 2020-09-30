import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  container: props => ({
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.paper,
    borderRadius: '0.5rem',
    boxShadow: props.selected ? '0 0 0 0.1rem #5DAC50' : null,
    cursor: 'pointer',
    marginTop: theme.spacing(2),
  }),

  title: {
    color: grey[500],
  },
  image: {
    height: '1.5rem',
  },
}))

const PaymentMethod = ({ id, title, image, onClick, selected }) => {
  const classes = useStyles({ selected })

  const handleClick = () => {
    onClick(id)
  }

  return (
    <div className={classes.container} onClick={handleClick}>
      <Typography className={classes.title}>{title}</Typography>
      <img className={classes.image} src={image} alt={`${title}`} />
    </div>
  )
}

export default PaymentMethod
