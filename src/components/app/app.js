
import React from 'react'
import AppTemplate from './app.jsx'
import './app.scss'

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return <AppTemplate name='Mike'/>
  }
}

export default App

