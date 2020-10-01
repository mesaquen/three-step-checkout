import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { makeStyles, withStyles } from '@material-ui/core'
import StepConnector from '@material-ui/core/StepConnector'
import clsx from 'clsx'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(() => ({
  container: props => ({
    width: props.limitWidth ? '80vw' : '100%',
    margin: props.limitWidth ? '0 auto' : null,
  }),
}))

const useCustomStepIconStyles = makeStyles({
  root: {
    color: grey[200],
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#61CB46',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#61CB46',
    zIndex: 1,
    fontSize: 18,
  },
});

const CustomConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: grey[200],
    },
  },
  completed: {
    '& $line': {
      borderColor: grey[200],
    },
  },
  line: {
    borderColor: grey[200],
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

const CustomStepIcon = (props) => {
  const classes = useCustomStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active || completed,
      })}
    >
       <div className={classes.circle} />
    </div>
  );
}

const CheckoutStepper = ({ activeStep, steps, limitWidth, ...props }) => {
  const classes = useStyles({ limitWidth })
  return (
    <div className={classes.container}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<CustomConnector/>}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default CheckoutStepper
