import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { itemsSelector } from '../../redux/selectors/shopSelectors'
import CatalogItem from '../catalog-item/CatalogItem'
import { searchItems } from '../../redux/actions/shopActions'

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
  const dispatch = useDispatch()
  const items = useSelector(itemsSelector)
  const handleSearch = event => {
    const { value } = event.target
    dispatch(searchItems(value))
  }
  return (
    <div>
      <input type='text' onChange={handleSearch} />
      <GridContainer>
        {items.map(item => (
          <CatalogItem
            key={item.id}
            thumbnail={item.thumbnailURL}
            description={item.description}
            currency={item.currency}
            price={item.price}
          />
        ))}
      </GridContainer>
    </div>
  )
}

export default Catalog
