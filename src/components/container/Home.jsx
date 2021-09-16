import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import Cards from './../cards_ToDo/Cards'
import { IconFire } from './../label_icons/Icon'
import AddCards from './AddCards'

export default function Home () {
  const { todos } = useContext(TodoContext)

  return (
    <div className='bg-blue-100 min-h-screen'>
      <div className='bg-white w-full sm:w-9/12 min-h-screen m-auto shadow-2xl'>
        <br />
        <AddCards />
        <br />

        <div
          className='w-10/12 bg-green-100 shadow-2xl pb-10
            py-5 rounded-lg m-auto flex flex-col lg:flex-row flex-wrap px-10'
        >
          {todos &&
            todos.map(({ name, email, todo, id }) => (
              <Cards key={id} id={id} name={name} email={email} todo={todo} />
            ))}
          {todos.length < 1 && <IconFire />}
        </div>
        
        <br />
      </div>
    </div>
  )
}
