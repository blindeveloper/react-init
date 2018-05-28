import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import OneLineForm from '../../../moleculs/OneLineForm/index.jsx'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <OneLineForm btnType="submit" refType={node => input = node}/>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: propTypes.func.isRequired
}

export default connect()(AddTodo)