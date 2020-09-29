import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './redux/store'
import Home from './screens/home/Home'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme/theme'
const App = () => {
  return (
    
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  )
}

export default App
