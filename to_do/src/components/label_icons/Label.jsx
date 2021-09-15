import { IconEmail, IconPeople, IconTodo } from "./Icon";

export function LabelUsername () {
    return(
    <label className='block text-blue-800 text-md font-semibold'>
      <div className='flex mt-2'>
        <IconPeople />
        Username:
      </div>
    </label>
  )
    }

export function LabelEmail () {
    return(
        <label className='block text-blue-800 text-md font-semibold'>
        <div className='flex mt-2'>
          <IconEmail />
          Email:
        </div>
      </label>
    )
}

export function LabelTodo () {
    return(
        <label className='block text-blue-800 text-md font-semibold mt-10'>
      <div className='flex'>
        <IconTodo />
        To-Do:
      </div>
    </label>
    )
}