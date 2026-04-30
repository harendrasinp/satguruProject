import React from 'react'
import mobileFooterData from '@/data/footer/mobileData'
import IconData from '@/icons/socialmediaIcons'
const MobileFooter = () => {
  return (
    <div className='lg:hidden bg-gray-100 flex flex-col justify-center items-center mt-5 p-5'>
        <IconData/>
        {mobileFooterData.map((line,index) => (
            <div key={index}>
                <span className='text-[1rem] text-gray-800'>{line}</span>
            </div>
        ))}
    </div>
  )
}

export default MobileFooter