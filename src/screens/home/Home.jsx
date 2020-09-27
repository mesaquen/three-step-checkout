import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Catalog from '../../components/catalog/Catalog'
import Header from '../../components/header/Header'
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
      <Header onBack={() => {}} />
      <div>Home</div>
      <Catalog />
    </div>
  )
}

export default Home
