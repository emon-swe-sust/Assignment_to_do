import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import AddUpdate from './AddUpdate'
import Cards from './Cards/Cards'
import { IconFire } from './label_icons/Icon'

function Home () {
  const [newTodo, setnewTodo] = useState({
    id: Date.now() + Math.random(),
    name: '',
    email: '',
    todo: ''
  })
  const { todos, dispatch } = useContext(TodoContext)

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
    <div className='bg-blue-100 min-h-screen'>
      <div className='bg-white w-full sm:w-9/12 min-h-screen m-auto shadow-2xl'>
        <br />
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
        <br />
        <div
          className='w-10/12 bg-green-100 shadow-2xl pb-10
            py-5 rounded-lg m-auto flex flex-col lg:flex-row flex-wrap px-10'
        >
          {todos &&
            todos.map(({ name, email, todo, id }) => (
              <Cards
                key={id}
                id={id}
                name={name}
                email={email}
                todo={todo}
              />
            ))}
          {todos.length < 1 && <IconFire />}
        </div>
        <br />
      </div>
    </div>
  )
}

export default Home
