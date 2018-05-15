let initialId = 0;
export default {
  toDoList: (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_DO_ITEM':
        return [
          ...state,
          {
            text: action.text, 
            id: initialId++,
            isCompleted: false
          }
        ]
      case 'TOGGLE':
        return state.map(el => {
          if(el.id === action.id) el.isCompleted = !el.isCompleted
          return el
        })
      default:
        return state
    }
  },
  filter: (state='SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter
      default:
        return 'SHOW_ALL';
    }
  }
}