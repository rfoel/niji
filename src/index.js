import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import App from 'components/App'

const renderApp = () => (
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)

const app = document.getElementById('app')
render(renderApp(), app)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), app)
  })
}
