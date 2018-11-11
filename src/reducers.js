import { combineReducers } from 'redux'
import todos from './components/organizms/todo/reducers/todos'
import visibilityFilter from './components/organizms/todo/reducers/visibilityFilter'
import swimmersListReducer from './components/organizms/swimmers/reducers/swimmers.list.reducer'

export default combineReducers({
  todos,
  visibilityFilter,
  swimmersListReducer
})