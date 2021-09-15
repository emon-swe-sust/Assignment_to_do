const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.payload)
    case 'DELETE':
      return state.filter(({ id }) => id !== action.id)
    case 'UPDATE':
        console.log(action.payload)
      return(
        state.map(todo => {
          if (todo.id === action.id) return action.payload
          else return todo
        })
      )
    default:
      return state
  }
}

export default reducer
