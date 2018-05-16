import ReactDOM from 'react-dom'
import React from 'react'
import '../src/main.scss'
import App from './modules/app/app'

ReactDOM.render(<div>
    Hello, from index.js file!<br/>
    <App/>
  </div>,
  
  document.getElementById('root')
)
