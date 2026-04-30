import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
        <div className='text-2xl'>Satguru Electricals</div>
        <div className="hidden lg:block mr-15 w-96">
            <input type="text" placeholder="Search" className="w-full p-2 bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    </header>

  )
}

export default Header