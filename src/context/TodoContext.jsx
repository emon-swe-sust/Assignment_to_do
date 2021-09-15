import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(reducer, [])
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
