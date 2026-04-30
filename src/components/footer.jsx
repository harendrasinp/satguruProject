import React from 'react'
import footerData from '@/data/footer/data'
import IconData from '@/icons/socialmediaIcons'
const Footer = () => {
  return (
    <div className='hidden bg-gray-100 lg:flex justify-evenly  mt-5 p-5'>
        {footerData.map((section) => (
            <div key={section.title}>
                <span className='text-[1rem] font-bold text-gray-800'>{section.title}</span>
                <ul className='text-gray-500 flex flex-col gap-2 mt-2 '>
                    {section.list.map((item, index) => (
                        <li className='cursor-pointer' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Footer