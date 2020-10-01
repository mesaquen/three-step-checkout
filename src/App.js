import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/home/Home'
import { ThemeProvider } from '@material-ui/styles'
import { PersistGate } from 'redux-persist/integration/react'
import theme from './theme/theme'
import Header from './components/header/Header'
import Checkout from './screens/checkout/Checkout'
import ConfirmationPage from './screens/confirmation/ConfirmationPage'
import { store, persistor } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  )
}

export default App
