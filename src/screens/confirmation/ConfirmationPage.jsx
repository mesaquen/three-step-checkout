import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SCREENS } from '../../Constants'
import { setHeaderTitle } from '../../redux/actions/headerActions'

const ConfirmationPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderTitle(SCREENS.REVIEW))
  }, [dispatch])

  return <div>ConfirmationPage</div>
}

export default ConfirmationPage
