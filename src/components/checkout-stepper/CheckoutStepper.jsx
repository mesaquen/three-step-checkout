import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: props => ({
      background: 'red',
    width: props.limitWidth ? '80vw' : '100%',
    margin: props.limitWidth ? '0 auto' : null,
  }),
}))

const CheckoutStepper = ({ activeStep, steps, limitWidth, ...props }) => {
  const classes = useStyles({ limitWidth })
  return (
    <div className={classes.container}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default CheckoutStepper
