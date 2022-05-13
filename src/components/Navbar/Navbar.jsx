import React from 'react';
import { GoGrabber } from 'react-icons/go';


export const Navbar = () => {
  return (
    <>
        <nav className='flex items-center bg-[#6D21B9] h-14'>
            <div className='flex-1'>
                <h1 className='text-white p-2 text-lg font-medium'>Nicolás Quiñonez</h1>
            </div>

            <div className='flex-1 flex justify-end'>
                <GoGrabber className='w-14 h-14 text-white'/>
            </div>
        </nav>
    </>
  )
}
