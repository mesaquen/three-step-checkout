import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { itemsSelector } from '../../redux/selectors/shopSelectors'
import CatalogItem from '../catalog-item/CatalogItem'

const GridContainer = styled.div`
  display: grid;
  max-width: 1240px;
  grid-template-columns: auto;
  align-items: center;
  grid-gap: 1em;
  margin: 0 auto;
  
  @media (min-width: 600px) { 
    grid-template-columns: auto auto;
  }
  
  @media (min-width: 768px) {
    max-width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Catalog = () => {
  const items = useSelector(itemsSelector)
  return (
    <GridContainer>
      {items.map(item => (
        <CatalogItem key={item.id} thumbnail={item.thumbnailURL} description={item.description} currency={item.currency} price={item.price} />
      ))}
    </GridContainer>
  )
}

export default Catalog
