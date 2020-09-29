import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './redux/store'
import Home from './screens/home/Home'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme/theme'
import Header from './components/header/Header'
import Checkout from './screens/checkout/Checkout'
import ConfirmationPage from './screens/confirmation/ConfirmationPage'
const App = () => {
  return (
    
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/confirmation' component={ConfirmationPage} />
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  )
}

export default App
