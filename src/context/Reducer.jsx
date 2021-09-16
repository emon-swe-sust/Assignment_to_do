const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.payload)
    case 'DELETE':
      return state.filter(({ id }) => id !== action.payload)
    case 'UPDATE':
      return(
        state.map(todo => {
          if (todo.id === action.payload.id) return action.payload.state
          else return todo
        })
      )
    default:
      return state
  }
}

export default reducer
