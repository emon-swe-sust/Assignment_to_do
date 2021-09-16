import React from 'react'
import TodoContextProvider from './../context/TodoContext'
import Home from './../components/container/Home'
export default function ContextWrapper () {
  return (
    <TodoContextProvider>
      <div>
        <Home />
      </div>
    </TodoContextProvider>
  )
}



