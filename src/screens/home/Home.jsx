import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
  const items = useSelector(state => state.cart.items)
  return (
    <div>
      Home
      {items.map(item => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  )
}

export default Home
