import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CheckoutStepper from '../../components/checkout-stepper/CheckoutStepper'
import PaymentMethod from '../../components/payment-method/PaymentMethod'
import { PAYMENT_METHODS, PAYMENT_METHODS_IDS, SCREENS } from '../../Constants'
import { setHeaderTitle } from '../../redux/actions/headerActions'
import {
  selectDeliveryDetails,
  selectItem,
} from '../../redux/selectors/cartSelector'

const STEPS = ['Cart', 'Payment options', 'Receipt']
const DEFAULT_STEP = 1

const useStyles = makeStyles(theme => ({
  container: props => ({
    margin: props.limitWidth ? '0 auto' : null,
    width: props.limitWidth ? '80%' : '100%',
    display: 'flex',
  }),
  image: props => ({
    borderRadius: '1rem',
    overflow: 'hidden',
    backgroundImage: `url(${props.imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flex: 3,
    background: grey[200],
    marginRight: theme.spacing(2),
  }),
  info: {
    padding: theme.spacing(3),
    flexDirection: 'column',
    borderRadius: '1rem',
    background: grey[200],
    display: 'flex',
    flex: 4,
  },
  infoGrid: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'auto auto',
  },
  cartInfoContainer: {
    gridRow: '1 / span 2',
  },

  deliveryDetailsContainer: {},
  totalCostContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  paymentMethodContainer: {
    gridColumn: '1 / span 2',
  },
  buttonContainer: {
    gridColumn: '2 / span 1',
  },
  button: {
    boxShadow: theme.shadows[0],
  },
  bodyText: {
    color: grey[500],
    fontSize: 12,
  },
  totalCostTitle: {
    fontSize: 12,
  },
  subTotal: {
    alignItems: 'center',
    gridColumn: '2',
    gridRow: '1 / span 2',
  },
}))

const Checkout = () => {
  const theme = useTheme()
  const limitWidth = useMediaQuery(theme.breakpoints.up('md'))
  const dispatch = useDispatch()
  const history = useHistory()
  const item = useSelector(selectItem)
  const deliveryDetails = useSelector(selectDeliveryDetails)
  const [activeStep, setActiveStep] = useState(DEFAULT_STEP)
  const [subtotal, setSubtotal] = useState(item.quantity * item.price)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    PAYMENT_METHODS_IDS.ONLINE_BANKING,
  )

  useEffect(() => {
    dispatch(setHeaderTitle(SCREENS.CHECKOUT))
  }, [dispatch])

  const goToConfirmation = () => {
    history.push('confirmation')
  }

  const imageUrl = item?.maxresURL

  const classes = useStyles({ limitWidth, imageUrl })

  return (
    <div>
      <CheckoutStepper
        activeStep={activeStep}
        steps={STEPS}
        limitWidth={limitWidth}
      />
      {item && deliveryDetails && (
        <div className={classes.container}>
          <div className={classes.image}></div>
          <div className={classes.info}>
            <div className={classes.infoGrid}>
              <div className={classes.cartInfoContainer}>
                <Typography variant='h5'>Cart total</Typography>
                <Typography>{item.description}</Typography>
                <Typography
                  className={classes.bodyText}
                >{`x${item.quantity} ${item.color} ${item.size}`}</Typography>
                <Typography
                  className={classes.bodyText}
                >{`Item #${item.id}`}</Typography>
              </div>
              <div className={classes.deliveryDetailsContainer}>
                <Typography variant='h6'>Delivery details</Typography>
                <Typography
                  className={classes.bodyText}
                >{`${deliveryDetails.name}`}</Typography>
                <Typography
                  className={classes.bodyText}
                >{`Prone no: ${deliveryDetails.phone}`}</Typography>
                <Typography
                  className={classes.bodyText}
                >{`Address: ${deliveryDetails.address}`}</Typography>
              </div>
              <div className={classes.totalCostContainer}>
                <Typography className={classes.totalCostTitle}>
                  Total cost
                </Typography>
                <Typography className={classes.bodyText}>
                  Delivery included
                </Typography>
                <Typography
                  variant='h4'
                  className={classes.subTotal}
                >{`$${subtotal}`}</Typography>
              </div>
              <div className={classes.paymentMethodContainer}>
                <Typography variant='h6'>Select your payment method</Typography>
                {PAYMENT_METHODS.map(paymentMethod => (
                  <PaymentMethod
                    key={paymentMethod.id}
                    onClick={setSelectedPaymentMethod}
                    id={paymentMethod.id}
                    title={paymentMethod.title}
                    image={paymentMethod.image}
                    selected={selectedPaymentMethod === paymentMethod.id}
                  />
                ))}
              </div>
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  fullWidth
                  variant='contained'
                  color='primary'
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
