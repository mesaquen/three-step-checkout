import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { itemsSelector } from '../../redux/selectors/shopSelectors'
import CatalogItem from '../catalog-item/CatalogItem'
import SearchBar from '../search-bar/SearchBar'
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import { addToCart } from '../../redux/actions/cartActions'

const useStyles = makeStyles(theme => ({
  gridContainer: props => ({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
    margin: '0 auto',
    maxWidth: props.limitWidth ? '80%' : '100%'
  }),
  searchBar: props => ({
    gridColumn: `1 / span ${props.columns}`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  }),
}))

const Catalog = () => {
  const dispatch = useDispatch()
  const items = useSelector(itemsSelector)
  const theme = useTheme()
  const screenMediumUp = useMediaQuery(theme.breakpoints.up('sm'))
  const screenLargeUp = useMediaQuery(theme.breakpoints.up('md'))

  const getColuns = () => {
    if (screenLargeUp) {
      return 3
    }

    if (screenMediumUp) {
      return 2
    }

    return 1
  }

  const columns = getColuns()

  const classes = useStyles({ columns , limitWidth: columns > 2})

  const handleAddToCart = (itemId) => {
    dispatch(addToCart(itemId))
  }

  return (
    <div className={classes.gridContainer}>
      <SearchBar className={classes.searchBar} />
      {items.map(item => (
        <CatalogItem
          key={item.id}
          thumbnail={item.thumbnailURL}
          description={item.description}
          currency={item.currency}
          price={item.price}
          onClick={() => handleAddToCart(item.id)}
        />
      ))}
    </div>
  )
}

export default Catalog
