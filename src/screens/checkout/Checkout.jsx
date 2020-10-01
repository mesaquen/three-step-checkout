import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from '@material-ui/core'
import BankIcon from '@material-ui/icons/AccountBalance'
import { grey } from '@material-ui/core/colors'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutProductInfo from '../../components/checkout-product-info/CheckoutProductInfo'
import CheckoutStepper from '../../components/checkout-stepper/CheckoutStepper'
import CheckoutTotal from '../../components/checkout-total/CheckoutTotal'
import PaymentMethod from '../../components/payment-method/PaymentMethod'
import { PAYMENT_METHODS, PAYMENT_METHODS_IDS, SCREENS } from '../../Constants'
import {
  setSelectedPaymentMethod,
  setActiveStep,
} from '../../redux/actions/cartActions'
import { setHeaderTitle } from '../../redux/actions/headerActions'
import {
  selectDeliveryDetails,
  selectItem,
  selectOrderDetails,
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
    minHeight: 340,
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
  bankIconContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  bankIcon: {
    marginRight: theme.spacing(2),
    fontSize: 36,
  },
  smalltext: {
    fontSize: 12,
  },
}))

const Checkout = () => {
  const theme = useTheme()
  const limitWidth = useMediaQuery(theme.breakpoints.up('md'))
  const dispatch = useDispatch()
  const item = useSelector(selectItem)
  const deliveryDetails = useSelector(selectDeliveryDetails)
  const { activeStep, selectedPaymentMethod } = useSelector(selectOrderDetails)
  const [subtotal] = useState(item.price * item.quantity)

  useEffect(() => {
    dispatch(setHeaderTitle(SCREENS.CHECKOUT))
    dispatch(setActiveStep(DEFAULT_STEP))
    dispatch(setSelectedPaymentMethod(PAYMENT_METHODS_IDS.ONLINE_BANKING))
  }, [dispatch])

  const goToConfirmation = useCallback(() => {
    dispatch(setActiveStep(activeStep + 1))
    dispatch(setHeaderTitle(SCREENS.REVIEW))
  }, [dispatch, activeStep])

  useEffect(() => {
    const handlePanelListener = (command, event) => {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          goToConfirmation()
        }
        return false
      }
    }

    window.PayWithMyBank.addPanelListener(handlePanelListener)

    return () => {
      window.PayWithMyBank.removePanelListener(handlePanelListener)
    }
  }, [goToConfirmation])

  const handleCheckout = () => {
    if (selectedPaymentMethod === PAYMENT_METHODS_IDS.ONLINE_BANKING) {
      const options = {
        accessId: 'D61EC9BAF0BB369B9438',
        merchantId: '1004314986',
        metadata: { demo: 'enabled' },
        currency: item.currency,
        paymentType: 'Deferred',
        amount: subtotal.toFixed(2).toString(),
        description: 'mesaquenf@gmail.com',
        merchantReference: 'dd9a5011-0901-4049-b975-4cf60dce6dd0',
        returnUrl: '#success',
        cancelUrl: '#cancel',
      }

      window.PayWithMyBank.establish(options)
    }
  }

  const handlePaymentMethodChange = paymentMethod => {
    dispatch(setSelectedPaymentMethod(paymentMethod))
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
      <div className={classes.container}>
        <div className={classes.image}></div>
        <div className={classes.info}>
          <div className={classes.infoGrid}>
            {item && deliveryDetails && activeStep === 1 && (
              <>
                <div className={classes.cartInfoContainer}>
                  <CheckoutProductInfo title='Cart total' classes={classes} />
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
                <CheckoutTotal value={subtotal} classes={classes} />
                <div className={classes.paymentMethodContainer}>
                  <Typography variant='h6'>
                    Select your payment method
                  </Typography>
                  {PAYMENT_METHODS.map(paymentMethod => (
                    <PaymentMethod
                      key={paymentMethod.id}
                      onClick={handlePaymentMethodChange}
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
                    onClick={handleCheckout}
                  >
                    Continue
                  </Button>
                </div>
              </>
            )}
            {activeStep === 2 && item.quantity && (
              <>
                <div>
                  <CheckoutProductInfo
                    title='Order summary'
                    classes={classes}
                  />
                </div>
                <div>
                  <Typography variant='h6'>Payment method </Typography>
                  <div className={classes.bankIconContainer}>
                    <BankIcon className={classes.bankIcon} color='primary' />
                    <Typography className={classes.smalltext}>
                      Online Banking
                    </Typography>
                  </div>
                </div>
                <CheckoutTotal value={subtotal} classes={classes} />
                <div className={classes.buttonContainer}>
                  <Button
                    className={classes.button}
                    fullWidth
                    variant='contained'
                    color='primary'
                  >
                    Place order
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
