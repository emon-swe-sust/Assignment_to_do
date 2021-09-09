import React, {useState} from "react";

function Cards({ id, name, email, todo, todoUpdate, todoDelete }) {
  const [update, setUpdate] = useState(false)
  const [info, setInfo] = useState({
    id: id,
    name: name,
    email: email,
    todo: todo,
  })

  function doUpdate(id) {
    setUpdate(!update);
    todoUpdate(id, info);
  }

  function handleChange(e){
    setInfo({...info, [e.target.name]:e.target.value})
  }

  return (
    <div className='bg-white mt-5 shadow-md lg:w-5/12 mx-6 rounded-lg'>
      <div className='p-5'>
        <label
          className='block text-blue-800 text-md font-semibold'
        >
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            &nbsp; Username:
          </div>
        </label>
        <div>
          {update ? (
            <input
              className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
              name='name'
              type='text'
              placeholder={name}
              onChange={e => handleChange(e)}
              required
            />
          ) : (
            name
          )}
        </div>
        <label
          className='block text-blue-800 text-md font-semibold'
        >
          <div className='flex mt-2'>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            &nbsp; Email:
          </div>

        </label>
        <div>
          {update ? (
            <input
              className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
              name='email'
              type='text'
              placeholder={email}
              onChange={e => handleChange(e)}
              required
            />
          ) : (
            email
          )}
        </div>
        <label
          className='block text-blue-800 text-md font-semibold mt-10'
        >
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            &nbsp; To-Do:
          </div>
        </label>
        <div>
          {update ? (
            <textarea
              className='w-full shadow-xl h-48 md:h-24 px-3 py-2 text-base text-gray-700 border rounded-xl focus:shadow-outline'
              placeholder={todo}
              name='todo'
              onChange={e => handleChange(e)}
              required
            />
          ) : (
            todo
          )}
        </div>
        <div className='pt-5 mb-2 mx-5'>
          {
            update ? (
              <button className='py-2 px-8 bg-blue-800 text-white
              flex m-auto rounded-lg hover:-translate-y-1 transform transition
              hover:bg-blue-500'
              onClick={() => doUpdate(id)}>
                Update
              </button>
            ) : (
              <div className='flex ml-auto'>
                <button className='ml-auto' onClick={() => setUpdate(!update)}>
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
                <button onClick={() => todoDelete(id)}>
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
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Cards;
