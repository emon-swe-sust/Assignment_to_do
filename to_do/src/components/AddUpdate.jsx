import React from 'react'
import { LabelEmail, LabelTodo, LabelUsername } from './label_icons/Label'
function AddUpdate ({ submit, handleChange, todoInfo, updateId }) {

  const formBox = (
    <React.Fragment>
      <div className='sm:flex'>
        <div className='flex-1'>
          <LabelUsername />
          <input
            className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
            name='name'
            type='text'
            placeholder='Username'
            onChange={e => handleChange(e)}
            value={todoInfo.name}
            required
          />
        </div>
        <div className='pl-0 sm:pl-5 sm:flex-1'>
          <LabelEmail />
          <input
            className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3
                  text-gray-700 leading-tight bg-white focus:shadow-outline'
            name='email'
            type='email'
            placeholder='xyz@abc.com'
            onChange={e => handleChange(e)}
            value={todoInfo.email}
            required
          />
        </div>
      </div>
      <div className=' mt-5'>
        <LabelTodo />
        <textarea
          className='w-full h-48 md:h-24 px-3 py-2 text-base text-gray-700 border rounded-xl focus:shadow-outline'
          placeholder='To-Do'
          name='todo'
          onChange={e => handleChange(e)}
          value={todoInfo.todo}
          required
        ></textarea>
      </div>
      <button
        className='flex m-auto mt-10 py-2 px-10 rounded-md bg-green-800 text-blue-100 text-md 
              font-semibold hover:bg-green-500 hover:-translate-y-1 transform transition shadow-xl'
        type='submit'
      >
        Create
      </button>
    </React.Fragment>
  )

  return (
      <div>
      {
          updateId !== '0' ? (
              // update
            <form onSubmit={e => submit(e, updateId)}>
                {formBox}
            </form>
          ) : (
              // create
            <form onSubmit={e => submit(e)}>
                {formBox}
            </form>
          )
      }
    </div>
  )
}

export default AddUpdate
