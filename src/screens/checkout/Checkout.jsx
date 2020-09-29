import React from 'react'
import { useHistory } from 'react-router-dom'

const Checkout = ()=> {
    const history = useHistory()
    return <div onClick={() => history.push('confirmation')}>Checkout page</div>
}

export default Checkout