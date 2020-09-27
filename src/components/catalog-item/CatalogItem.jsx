import React from 'react'
import styled from 'styled-components'
const Item = styled.div`
  padding: 1rem;
  background-color: #dddddd;
  @media (min-width: 768px) {
    background-color: red;
  }
`

const CatalogItem = ({ id, description, ...props }) => {
  return <Item {...props}>{description}</Item>
}

export default CatalogItem
