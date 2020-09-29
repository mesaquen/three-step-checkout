import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Catalog from '../../components/catalog/Catalog'
import { getProducts } from '../../logic/ProductService'
import { populateItems } from '../../redux/actions/cartActions'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      dispatch(populateItems(data))
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
      <Catalog />
    </div>
  )
}

export default Home
