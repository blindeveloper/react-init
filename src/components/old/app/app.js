import React from 'react'
import AppTemplate from './app.tmp.jsx'
import ToDoList from '../to-do-list/to-do-list.component'

class App extends React.Component {
  constructor(props){
    super(props)
    console.log('====================================');
    console.log('props: ', props);
    console.log('====================================');
  }

  sum(a, b) {
    return a + b;
  }

  render() {
    return (
      <div>
        <AppTemplate name='Mike'/>
        <ToDoList/>
      </div>
    )
  }
}

export default App