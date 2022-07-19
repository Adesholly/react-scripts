import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {


  return (
    <div className='flex flex-wrap  gap-4 m-8 '>
      <div class='bg-white flex flex-col items-center shadow-md border border-gray-200 rounded-lg max-w-sm'>
        <img className='rounded-t-lg' src='/images/calculator.png' alt='' />

        <div className='flex flex-col  items-center justify-center p-5'>
          <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
            Calculator
          </h5>

          <p className='font-normal text-center text-gray-700 mb-3'>
            Calculator with State Management useReducer hook
          </p>
          <Link
            to='/calculator'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
          >
            Open
          </Link>
        </div>
      </div>

      <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm'>
        <img className='rounded-t-lg' src='/images/car0.png' alt='' />

        <div className='p-5'>
          <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
            Wordle
          </h5>

          <p className='font-normal text-gray-700 mb-3'>
            My version of the game with the same functionality
          </p>
          <Link
            to='/wordle'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
          >
            Open
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
