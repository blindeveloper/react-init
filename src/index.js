import ReactDOM from 'react-dom'
import React from 'react'
import '../src/index.scss';
import App from './components/app/app'

ReactDOM.render(<div>
    Hello, from index.js file!<br/>
    <App/>
  </div>,
  
  document.getElementById('root')
)
