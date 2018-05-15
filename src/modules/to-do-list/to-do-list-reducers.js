let initialId = 0;
export default {
  toDoList: (state = [], action) => {
    
    switch (action.type) {
      case 'ADD_TO_DO_ITEM':
        return [
          ...state,
          {
            text: action.text, 
            id: initialId++
          }
        ]
      default:
        return state
    }
  }
}