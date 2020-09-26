import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../logic/ProductService'
import { populateItems } from '../../redux/actions/cartActions'
import { itemsSelector } from '../../redux/selectors/shopSelectors'

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(itemsSelector)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      dispatch(populateItems(data))
    }
    fetchData()
  }, [dispatch])

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
