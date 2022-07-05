import React from "react"

const CalculatorScreen = () => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-pink-500  h-screen flex justify-center items-center'>
      <div className='container w-80 shadow-lg'>

        <div className='bg-purple-900 flex flex-col items-end text-white py-2 px-4 items-'>
          <div className=''>656 * </div>
          <div className='text-2xl'>9089</div>
        </div>

        <div className="bg-white/80 grid grid-cols-4 gap-[2px] text-gray-900 text-2xl ">
            <button className='col-span-2 p-4 bg-pink-200/90 hover:bg-pink-100/90'>AC</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>DEL</button> 
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>÷</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>1</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>2</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>3</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>*</button>
          
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>4</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>5</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>6</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>+</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>7</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>8</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>9</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>-</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>0</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90'>.</button>
            <button className='p-4 bg-pink-200/90 hover:bg-pink-100/90 col-span-2'>=</button>

        </div>

      </div>
    </div>
  )
}

export default CalculatorScreen
