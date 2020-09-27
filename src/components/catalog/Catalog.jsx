import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { itemsSelector } from '../../redux/selectors/shopSelectors'
import CatalogItem from '../catalog-item/CatalogItem'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 500px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
`

const Catalog = () => {
  const items = useSelector(itemsSelector)
  return (
    <GridContainer>
      {items.map(item => (
        <CatalogItem key={item.id} description={item.description} />
      ))}
    </GridContainer>
  )
}

export default Catalog
