import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Portfolio', link: '/' },
    { name: 'Contact', link: '/' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-[#6D21B9] py-4 md:px-10 px-7'>
          <div className='font-bold text-3xl cursor-pointer flex items-center'>
            <h1>Nicolás Quiñonez</h1>
          </div>

          <div onClick={() => setOpen(!open)} className='text-4xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>
          <ul className={`bg-[#6D21B9] md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 `}>
            {Links.map((Link) => (
              <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={Link.link} className='link-underline link-underline-black'>{Link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
