import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'
import { searchItems } from '../../redux/actions/shopActions'
import { selectGeneralSearch } from '../../redux/selectors/shopSelectors'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    inputContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        color: grey[500]
    },
    inputText: {
        textAlign: 'center',
        fontSize: '1.5rem'
    }
}))

const SearchBar = props => {
  const dispatch = useDispatch()
  const generalSearch = useSelector(selectGeneralSearch)

  const handleChange = (event) => {
      dispatch(searchItems(event.target.value))
  }
const classes = useStyles()
  return (
    <div {...props}>
      <Input
      value={generalSearch}
      type="search"
      className={classes.inputContainer}
      inputProps={{className: classes.inputText}}
        startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        fullWidth
        placeholder='Search for your sneaker'
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
