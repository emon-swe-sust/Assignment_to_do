import React, { createContext, useReducer, useState } from 'react'

export const TodoContext = createContext()

const reducer = (state, action) =>{
    switch (action.type) {
        case "CREATE":
            return(
                state.concat(action.payload)
            )
        case "DELETE":
            return(
                action.payload
            )
        case "UPDATE":
            return(
                action.payload
            )
        default:
            return state
    }
}

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(reducer, [])

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
