import React from 'react'
import NavBarData from '@/data/nav-bar/data'
const Navebar = () => {
  return (
    <div className='hidden bg-white lg:flex justify-center gap-10 py-3 text-gray-700 font-medium text-lg
    border-b border-gray-200 shadow-lg'>
        {NavBarData.map((item,index) => (
            <div key={index} className='cursor-pointer hover:text-gray-900 transition-colors duration-300'>
                {item}
            </div>
        ))}
    </div>
  )
}

export default Navebar