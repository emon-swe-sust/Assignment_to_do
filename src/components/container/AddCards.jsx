import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import AddUpdate from '../add_Update/AddUpdate'

function AddCards () {
  const { dispatch } = useContext(TodoContext)

  const [newTodo, setnewTodo] = useState({
    id: Date.now() + Math.random(),
    name: '',
    email: '',
    todo: ''
  })

  const handleChange = e => {
    setnewTodo({ ...newTodo, [e.target.name]: e.target.value })
  }

  const create = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE',
      payload: newTodo
    })

    setnewTodo({
      id: Date.now() + Math.random(),
      name: '',
      email: '',
      todo: ''
    })
  }

  return (
    <div
      className='w-10/12 bg-green-100 shadow-2xl
      py-5 rounded-lg m-auto'
    >
      <div className='flex'>
        <div className='h3 m-auto text-green-800 font-bold text-2xl'>
          Create To Do
        </div>
      </div>
      <div className='px-10'>
        <AddUpdate
          todoInfo={newTodo}
          submit={create}
          handleChange={handleChange}
          updateId={'0'}
        />
      </div>
    </div>
  )
}

export default AddCards
