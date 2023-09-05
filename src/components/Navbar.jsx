import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='max-w-[1240px] bg-[#000] text-white flex mx-auto justify-between py-10 items-center'>
        <h1 className='text-[2rem] text-blue-600'>Navbar</h1>
        <ul className='hidden md:flex gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
            <button>Hire Me</button>
        </ul>

        <div onClick={handleNav} className='block md:hidden cursor-pointer z-20 px-5'>
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
            <div className={nav ? 'fixed left-52 top-20 w-[100%] h-[30%] border-r rounded-lg border-r-gray-900 bg-[#2b2b85]' : 'fixed left-[-100%]'}>
                <ul className='m-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                    <button className='p-2 bg-black text-white rounded my-5'>Hire Me</button>
                </ul>
            </div>
        </div>
  )
}

export default Navbar