import React from 'react'
import {createStore, combineReducers} from 'redux'
import ToDoReducers from '../../../reducers'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.store = createStore(combineReducers(this.getReducersList()))
    this.state = this.store.getState()
  }

  getReducersList(){
    return new Object({
      todos: ToDoReducers.toDoList,
      filter: ToDoReducers.filter
    })
  }

  addNewToDoItem() {
    this.store.dispatch({type: 'ADD_TO_DO_ITEM', text: this.input.value})
    this.handleChange()
    this.input.value = ''
  }

  toggleTodoStatus(todoItem){
    this.store.dispatch({type: 'TOGGLE', id: todoItem.id})
    this.handleChange()//? watch
  }

  handleChange() {
    this.setState(combineReducers(this.getReducersList()))
  }

  setFilter(filterName) {
    this.store.dispatch({type: 'SET_FILTER', filter: filterName})
    this.handleChange()
  }

  render(){
    return (
      <section>
        <input type='text' ref = {node => {this.input = node}}/>
        <button onClick={() => this.addNewToDoItem()}>+</button>
        {this.store.getState().todoList.length ? 
          <div>
            <button onClick={() => this.setFilter('ALL')}>All</button>
            <button onClick={() => this.setFilter('COMPLETED')}>Completed</button>
            <button onClick={() => this.setFilter('ACTUAL')}>Actual</button>
          </div> : null}
        <ul>
          {this.store.getState()
            .todoList.map(todoItem => 
              <li key={todoItem.id} 
                style = {todoItem.isCompleted ? {textDecoration:'line-through'} : {textDecoration:''}}
                onClick = {() => this.toggleTodoStatus(todoItem)}>
                {`${todoItem.text} ${todoItem.isCompleted}`}
              </li>)}
        </ul>
      </section>
    )
  }
}

export default ToDoList