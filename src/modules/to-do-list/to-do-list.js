import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import ToDoReducers from './to-do-list-reducers'

class ToDoList extends React.Component {
  constructor(){
    super()
    this.toDoListRedusor = ToDoReducers.toDoList
    this.store = createStore(ToDoReducers.toDoList)
    this.updateState = () => new Object({toDoList: this.store.getState()})
    // this.updateState = () => combineReducers({
    //   this.toDoListRedusor
    // })
    this.state = this.updateState()
    
    this.addNewToDoItem = () => {
      this.store.dispatch({type: 'ADD_TO_DO_ITEM', text: this.input.value})
      this.setState(this.updateState())
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
       {this.store.getState().map(e =>
       <li key={e.id} >
         {e.text}
       </li>)}
     </ul>
    </section>
    )
    
  }
}

export default ToDoList