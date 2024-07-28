import { getRandomFiveDigitNumber } from '@/constant/constant'
import { AppContext } from '@/contexts/app.context'
import http from '@/utils/http'
import React, { useContext, useEffect, useState } from 'react'

function Invoice() {
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  })
  const [data, setData] = useState([])
  useEffect(() => {
    fetchProduct()
  }, [])
  const fetchProduct = async () => {
    const response = await http.put('/bill/get-bill', {
      userId: 31,
      billId: 12,
      phoneNumber: '12345',
      name: 'name',
      address: 'ha noi',
      productIds: [15, 16]
    })
    console.log(response)
  }
  return (
    <div class='bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto'>
      <div class='flex items-center justify-between mb-8'>
        <div class='flex items-center'>
          <img class='h-8 w-8 mr-2' src='https://tailwindflex.com/public/images/logos/favicon-32x32.png' alt='Logo' />
          <div class='text-gray-700 font-semibold text-lg'>SHOP RUNNER</div>
        </div>
        <div class='text-gray-700'>
          <div class='font-bold text-xl mb-2'>INVOICE</div>
          <div class='text-sm'>Date: {new Date().toLocaleDateString()}</div>
          <div class='text-sm'>Invoice #: INV{getRandomFiveDigitNumber()}</div>
        </div>
      </div>
      <div class='border-b-2 border-gray-300 pb-8 mb-8'>
        <h2 class='text-2xl font-bold mb-4'>Bill To:</h2>
        <div class='text-gray-700 mb-2'>
          <input
            type='text'
            id='first_name'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='John Doe'
            required
            name='name'
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div class='text-gray-700 mb-2'>
          <input
            type='text'
            id='first_name'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='123 Main St.'
            required
            name='address'
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>
        <div class='text-gray-700'>
          <input
            type='text'
            id='first_name'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder='0123456789'
            required
            name='phoneNumber'
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
        </div>
      </div>
      <table class='w-full text-left mb-8'>
        <thead>
          <tr>
            <th class='text-gray-700 font-bold uppercase py-2'>Product name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => (
            <tr key={key}>
              <td class='py-4 text-gray-700'>{item?.data?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class='flex justify-end mb-8'>
        <div class='text-gray-700 mr-2'>Total:</div>
        <div class='text-gray-700 font-bold text-xl'>${localStorage.getItem('price')}</div>
      </div>
    </div>
  )
}

export default Invoice
