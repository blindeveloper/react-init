import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root.jsx'
import rootReducers from './components/organizms/todo/reducers'

import '../src/main.scss'

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Root store={store} />,
  document.getElementById('root')
)
