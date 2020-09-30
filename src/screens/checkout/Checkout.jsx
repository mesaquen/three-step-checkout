import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SCREENS } from '../../Constants'
import { setHeaderTitle } from '../../redux/actions/headerActions'

const Checkout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderTitle(SCREENS.CHECKOUT))
  }, [dispatch])
  
  const history = useHistory()
  return <div onClick={() => history.push('confirmation')}>Checkout page</div>
}

export default Checkout
