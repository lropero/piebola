import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from 'piebola/app'
import store from 'piebola/store'
import theme from 'piebola/theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
