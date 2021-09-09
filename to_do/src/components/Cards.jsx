import React, {useEffect} from 'react'

function Cards ({ id, name, email, todo, setTodos, todos }) {

    function handleDelete(id){   
        console.log(id) 
        let newtodos = todos;
        console.log(newtodos)

       setTodos(newtodos)
    }

  return (
    <div className='bg-white mt-5 shadow-md lg:w-5/12 mx-6 rounded-lg'>
      <div className='p-2'>
        {/* bg-white mt-5 shadow-md hover:bg-blue-100 
        w-5/12 mx-6 rounded-lg */}
        <label
          className='block text-blue-800 text-md font-semibold'
          htmlFor='username'
        >
          Username:
        </label>
        <div>{name}</div>
        <label
          className='block text-blue-800 text-md font-semibold'
          htmlFor='username'
        >
          Email:
        </label>
        <div>{email}</div>
        <label
          className='block text-blue-800 text-md font-semibold mt-5'
          htmlFor='username'
        >
          To-Do:
        </label>
        <div>{todo}</div>
        <div className='pt-5 flex mb-2 mx-5'>
          <button className='ml-auto' onClick={()=>{handleDelete(id)}}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-red-500 shadow-xl
              hover:-translate-y-1 transform transition hover:text-white
              hover:bg-red-500'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-purple-500 shadow-xl
              hover:-translate-y-1 transform transition hover:text-white
              hover:bg-purple-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
