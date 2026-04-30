import React from 'react'
import { Icons } from '@/icons/icons'
const Header = () => {
  return (
    <header className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
        <div className='text-2xl'>Satguru Electricals</div>
        <div className="relative hidden mr-15 w-96 lg:flex items-center">

            <input type="text" placeholder="Search" className="w-96 p-2 bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500  focus:outline-none focus:ring-2 " />

            <button className='absolute right-0 bg-gray-400 h-full w-15 flex justify-center items-center text-gray-800 cursor-pointer'>
              <Icons.search />
            </button>
        </div>
    </header>

  )
}

export default Header