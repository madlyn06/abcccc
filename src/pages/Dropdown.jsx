import http from '@/utils/http'
import React from 'react'

function Dropdown({ setEdit, id, setId }) {
  async function handleDelete() {
    await http.delete(`product/${id}`)
  }
  return (
    <div
      id='apple-imac-27-dropdown'
      className=' z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
    >
      <ul className='py-1 text-sm' aria-labelledby='apple-imac-27-dropdown-button'>
        <li>
          <button
            type='button'
            onClick={() => {
              setEdit(true)
              setId(id)
            }}
            className='flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-dark text-gray-700 dark:text-gray-200'
          >
            <svg
              className='w-4 h-4 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
              />
            </svg>
            Edit
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
