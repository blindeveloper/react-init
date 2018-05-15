import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import ToDoReducers from './to-do-list-reducers'

let toDoListRedusor = ToDoReducers.toDoList

class ToDoList extends React.Component {
  constructor(){
    super()
    this.store = createStore(combineReducers({toDoListRedusor}))
    this.state = this.store.getState()
    
    this.addNewToDoItem = () => {
      this.store.dispatch({type: 'ADD_TO_DO_ITEM', text: this.input.value})
      this.setState(combineReducers({toDoListRedusor}))
      this.input.value = ''
      console.log('store.getState(): ', this.store.getState());
    }
  }

  render(){
    return (
    <section>
      <input type='text' ref={node => {this.input = node}}/>
      <button onClick={this.addNewToDoItem}>+</button>
     <ul>
       {this.store.getState().toDoListRedusor.map(e =>
       <li key={e.id} >
         {e.text}
       </li>)}
     </ul>
    </section>
    )
    
  }
}

export default ToDoList