import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import AddUpdate from '../add_Update/AddUpdate'
import { IconUpdate, IconDelete } from '../label_icons/Icon'
import { LabelEmail, LabelTodo, LabelUsername } from '../label_icons/Label'

function Cards ({ id, name, email, todo }) {
  const [updateFlag, setUpdateFlag] = useState(false)
  const [state, setState] = useState({
    id,
    name,
    email,
    todo
  })
  const { dispatch } = useContext(TodoContext)

  function handleChange (e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const todoUpdate = (e, id) => {
    e.preventDefault()
    setUpdateFlag(!updateFlag)
    dispatch({
      type: 'UPDATE',
      payload: {
        state,
        id
      },
    })
  }

  function todoDelete () {
    dispatch({
      type: 'DELETE',
      payload: id,
    })
  }

  return (
    <div className='bg-white mt-5 shadow-md lg:w-5/12 mx-6 rounded-lg'>
      <div className='p-5'>
        {updateFlag ? (
          <AddUpdate
            submit={todoUpdate}
            handleChange={handleChange}
            todoInfo={state}
            updateId={id}
          />
        ) : (
          <div>
            <LabelUsername />
            <div>{name}</div>
            <LabelEmail />
            <div>{email}</div>
            <LabelTodo />
            <div>{todo}</div>
            <div className='pt-5 mb-2 mx-5'>
              <div className='flex ml-auto'>
                <button
                  className='ml-auto'
                  onClick={() => setUpdateFlag(!updateFlag)}
                >
                  <IconUpdate />
                </button>
                <button onClick={() => todoDelete(id)}>
                  <IconDelete />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cards
