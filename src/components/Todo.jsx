import React from 'react'
import TodoContextProvider from '../context/TodoContext'
import Home from './Home'

function Todo () {
  return (
    <TodoContextProvider>
      <div className='App'>
        <Home />
      </div>
    </TodoContextProvider>
  )
}

export default Todo
