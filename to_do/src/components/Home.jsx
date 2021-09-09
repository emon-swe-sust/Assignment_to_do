import React, { useState, useEffect } from 'react'
import Cards from './Cards'

function Home () {
  const [addTodo, setAddToDo] = useState({})
  const [todos, setTodos] = useState([])
  const [change, setChange] = useState(false)

  useEffect(() => {
    console.log('hi',todos)
  }, [todos])

  function handleChange (e) {
    setAddToDo({ ...addTodo, [e.target.name]: e.target.value })
  }

  function create (e) {
    e.preventDefault()
    setTodos([...todos, addTodo])
  }

  function todoDelete(id) {
    // console.log(id);
    let newtodos = todos;
    // console.log(newtodos);
    newtodos.splice(id,1)
    // console.log(newtodos);
    setTodos(newtodos);
    setChange(!change)
  }

  return (
    <div className='bg-blue-100 min-h-screen'>
      <div className='bg-white w-full sm:w-9/12 min-h-screen m-auto shadow-2xl'>
        {/* create */}
        <br />
        <div
          className='w-10/12 bg-green-100 shadow-md
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
                  Username
                </label>
                <input
                  className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
                  name='name'
                  type='text'
                  placeholder='Username'
                  onChange={e => handleChange(e)}
                    required
                />
              </div>
              <div className='pl-0 sm:pl-5 flex-1'>
                <label
                  className='block text-blue-800 text-md font-semibold mb-2 pt-5 sm:pt-0'
                  htmlFor='username'
                >
                  Email
                </label>
                <input
                  className='shadow-xl appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline'
                  name='email'
                  type='email'
                  placeholder='xyz@abc.com'
                  onChange={e => handleChange(e)}
                  required
                />
              </div>
            </div>
            <div className=' mx-10 mt-5'>
              <label
                className='block text-blue-800 text-md font-semibold mb-2'
                htmlFor='username'
              >
                To-Do:
              </label>
              <textarea
                className='w-full h-48 md:h-24 px-3 py-2 text-base text-gray-700 border rounded-xl focus:shadow-outline'
                placeholder='To-Do'
                name='todo'
                onChange={e => handleChange(e)}
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
          className='w-10/12 bg-green-100 shadow-md
            py-5 rounded-lg m-auto flex flex-col lg:flex-row flex-wrap px-10'
        >
          {todos ? (
            console.log(todos)
            ) : (-1)}
          {todos && todos.map((todo, idx) => (
            <Cards key={idx} id={idx} name={todo.name} email={todo.email} todo={todo.todo} todoDelete={todoDelete}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
