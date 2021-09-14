import React, { useState, useEffect, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Cards from './Cards'

function Home() {
  const [newTodo, setnewTodo] = useState({
    name:'',
    email:'',
    todo:''
  })
  const {todos, setTodos} = useContext(TodoContext)
  const [change, setChange] = useState(false)

  useEffect(()=>{
    setnewTodo({
      name:'',
      email:'',
      todo:''
    })
  },[todos])

  function handleChange(e) {
    setnewTodo({ ...newTodo, [e.target.name]: e.target.value })
  }

  function create(e) {
    e.preventDefault()
    setTodos([...todos, newTodo])
  }

  function todoupdate(id, info) {
    let newTodos = todos;
    newTodos[id] = info;
    setTodos(newTodos);
    setChange(!change)
  }

  function todoDelete(id) {
    let newtodos = todos;
    newtodos.splice(id, 1)
    setTodos(newtodos);
    setChange(!change)
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
          <form onSubmit={e => create(e)}>
            <div className='sm:flex mx-10 mt-5'>
              <div className='flex-1'>
                <label
                  className='block text-blue-800 text-md font-semibold mb-2'
                  htmlFor='username'
                >
                  <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    &nbsp; Username:
                  </div>
                </label>
                <input
                  className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
                  name='name'
                  type='text'
                  placeholder='Username'
                  onChange={e => handleChange(e)}
                  value={newTodo.name}
                  required
                />
              </div>
              <div className='pl-0 sm:pl-5 flex-1'>
                <label
                  className='block text-blue-800 text-md font-semibold mb-2 pt-5 sm:pt-0'
                  htmlFor='username'
                >
                  <div className='flex'>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    &nbsp; Email:
                  </div>
                </label>
                <input
                  className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3
                  text-gray-700 leading-tight bg-white focus:shadow-outline'
                  name='email'
                  type='email'
                  placeholder='xyz@abc.com'
                  onChange={e => handleChange(e)}
                  value={newTodo.email}
                  required
                />
              </div>
            </div>
            <div className=' mx-10 mt-5'>
              <label
                className='block text-blue-800 text-md font-semibold mb-2'
                htmlFor='username'
              >
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  &nbsp; To-Do:
                </div>

              </label>
              <textarea
                className='w-full h-48 md:h-24 px-3 py-2 text-base text-gray-700 border rounded-xl focus:shadow-outline'
                placeholder='To-Do'
                name='todo'
                onChange={e => handleChange(e)}
                value={newTodo.todo}
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
          </form>
        </div>
        <br />
        <div
          className='w-10/12 bg-green-100 shadow-2xl pb-10
            py-5 rounded-lg m-auto flex flex-col lg:flex-row flex-wrap px-10'
        >
          {todos && todos.map(({name, email, todo}, idx) => (
            <Cards key={idx} id={idx} name={name} email={email} todo={todo} todoDelete={todoDelete} todoUpdate={todoupdate} />
          ))}
          {todos.length < 1 &&
            <div className='flex m-auto text-xl text-red-500 font-semibold'>
              No To-Do Available, Chilll &nbsp; &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
          }
        </div>
        <br />
      </div>
      
    </div>
  )
}

export default Home