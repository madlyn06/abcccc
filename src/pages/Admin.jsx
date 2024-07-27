import React, { useEffect, useState } from 'react'
import ModalAdd from './ModalAdd'
import Dropdown from './Dropdown'
import ModalEdit from './ModalEdit'
import { Tooltip } from 'react-tooltip'
import http from '@/utils/http'

function Admin() {
  const [showAdd, setShowAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState('')

  const [product, setProduct] = useState([])
  useEffect(() => {
    fetchCategory()
  }, [])
  async function fetchCategory() {
    const response = await http.get(`/product?page=0&limit=10&keyword=&category=bb`)
    setProduct(response?.data?.productResponses || [])
  }
  return (
    <div>
      {/* Start block */}
      <section className='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
          {/* Start coding here */}
          <div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label htmlFor='simple-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      placeholder='Search'
                      required
                    />
                  </div>
                </form>
              </div>
              <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                <button
                  type='button'
                  onClick={() => setShowAdd(true)}
                  id='createProductModalButton'
                  className='flex items-center justify-center text-dark bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
                >
                  <svg
                    className='h-3.5 w-3.5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                    />
                  </svg>
                  Add product
                </button>
                <div className='flex items-center space-x-3 w-full md:w-auto'>
                  <button
                    id='actionsDropdownButton'
                    data-dropdown-toggle='actionsDropdown'
                    className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-dark dark:hover:bg-gray-700'
                    type='button'
                  >
                    <svg
                      className='-ml-1 mr-1.5 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id='actionsDropdown'
                    className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                  >
                    <ul
                      className='py-1 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='actionsDropdownButton'
                    >
                      <li>
                        <a
                          href='#'
                          className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-dark'
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-dark'
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id='filterDropdownButton'
                    data-dropdown-toggle='filterDropdown'
                    className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-dark dark:hover:bg-gray-700'
                    type='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='h-4 w-4 mr-2 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Filter
                    <svg
                      className='-mr-1 ml-1.5 w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-4 py-4'>
                      Product name
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Category
                    </th>

                    <th scope='col' className='px-4 py-3'>
                      Description
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Price
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      <span className='sr-only'>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product?.map((product, index) => (
                    <tr className='border-b dark:border-gray-700' key={index}>
                      <th scope='row' className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-dark'>
                        {product?.name}
                      </th>
                      <td className='px-4 py-3'> {product?.category} </td>
                      <td className='px-4 py-3 max-w-[12rem] truncate'>{product?.description}</td>
                      <td className='px-4 py-3'>{product?.price}</td>
                      <td className='px-4 py-3 flex items-center justify-end'>
                        <a
                          id='clickable'
                          className='inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100'
                          type='button'
                        >
                          <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                          </svg>
                        </a>
                        <Tooltip
                          style={{
                            backgroundColor: 'white'
                          }}
                          anchorSelect='#clickable'
                          clickable
                        >
                          <Dropdown setEdit={setEdit} id={product?.id} setId={setId} />
                        </Tooltip>
                        {/* {option && } */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* End block */}
      {/* Create modal */}
      {showAdd && <ModalAdd setShowAdd={setShowAdd} />}
      {/* Update modal */}
      {edit && <ModalEdit setEdit={setEdit} id={id} />}
    </div>
  )
}

export default Admin
