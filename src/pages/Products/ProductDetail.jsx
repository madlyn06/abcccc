import http from '@/utils/http'
import React, { useEffect, useState } from 'react'

function ProductDetail() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetchProduct()
  }, [])
  const fetchProduct = async () => {
    const response = await http.get(`/product/10`)
    setProduct(response?.data || {})
  }
  console.log(product)
  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl gap-6 lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          {/* <div className='flex gap-8'> */}
          <div className='hidden lg:flex flex-col gap-3 col-span-1 '>
            <div className='rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                alt='Model wearing plain black basic tee.'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='grid-cols-5 grid gap-2'>
              {Array.from({ length: 5 }).map((_, i) => (
                <div className='aspect-h-2 aspect-w-3 col-span-1 overflow-hidden rounded-lg'>
                  <img
                    src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg'
                    alt='Model wearing plain black basic tee.'
                    className='h-full w-full object-cover object-center'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='mt-4 lg:row-span-3 col-span-1 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>{product?.price}$</p>
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {/* Active: "text-gray-900", Default: "text-gray-200" */}
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-900'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <svg
                    className='h-5 w-5 flex-shrink-0 text-gray-200'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='sr-only'>4 out of 5 stars</p>
                <a href='#' className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                  117 reviews
                </a>
              </div>
            </div>
            <form className='mt-10'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Color</h3>
                <fieldset aria-label='Choose a size' className='mt-4'>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {product?.colors?.map((color, index) => (
                      <label
                        key={index}
                        className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                      >
                        <input type='radio' name='size-choice' defaultValue='XS' className='sr-only' />
                        <span>{color?.name}</span>

                        <span className='pointer-events-none absolute -inset-px rounded-md' aria-hidden='true' />
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>Size</h3>
                  <a href='#' className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                    Size guide
                  </a>
                </div>
                <fieldset aria-label='Choose a size' className='mt-4'>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {product?.sizes?.map((color, index) => (
                      <label
                        key={index}
                        className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                      >
                        <input type='radio' name='size-choice' defaultValue='XS' className='sr-only' />
                        <span>{color?.name}</span>

                        <span className='pointer-events-none absolute -inset-px rounded-md' aria-hidden='true' />
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className='flex gap-4'>
                <button
                  type='submit'
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Buy
                </button>
                <button
                  type='submit'
                  className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
        {/* Product info */}
        <div className='col-span-1'>
          <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-4'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>{product?.name}</h1>
            </div>

            <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
              {/* Description and details */}
              <div>
                <h3 className='sr-only'>Description</h3>
                <div className='space-y-6'>
                  <p className='text-base text-gray-900'>{product?.description} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
