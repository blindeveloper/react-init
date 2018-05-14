
import React from 'react'
import AppTemplate from './app.tmp.jsx'

class App extends React.Component {
  constructor(){
    super()
  }

  sum(a, b) {
    return a + b;
  }

  render() {
    return (<AppTemplate name='Mike'/>)
  }
}

export default App