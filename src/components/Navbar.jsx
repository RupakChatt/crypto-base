import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [icon, setIcon] = useState(false)
  const [menu, setMenu] = useState(false)

  const handleToggle = () => {
    icon ? setIcon(false) :setIcon(true)
    menu ? setMenu(false) : setMenu(true)
  }
  return (
    <div className='flex justify-between items-center md:flex md:justify-between md:items-center p-4 bg-slate-800 w-full h-[80px] sticky top-0 left-0 z-10'>
        {/* Left */}
        <Link to='/'>
        <h1 className='text-sm font-extrabold text-white sm:text-sm lg:text-2xl'>Crypto<span className='text-sm font-extrabold text-purple-700 sm:text-sm lg:text-2xl'>Base</span></h1>
        </Link>
        
        {/* Middle */}
    
        {menu ? <ul className='text-sm font-bold antialiased text-white absolute bg-slate-800 p-[1rem] left-0 w-full top-20 transition-all duration-500 ease-in'>
            <li className='p-3'><a href='/'>Price</a></li>
            <li className='p-3'><a href='/'>Learn</a></li>
            <li className='p-3'><a href='/'>Businesses</a></li>
            <li className='p-3'><a href='/'>Developers</a></li>
            <li className='p-3'><a href='/'>Company</a></li>
        </ul>: <ul className='sm:text-sm lg:text-base md:flex md:justify-between md:items-center font-bold antialiased text-white hidden'>
            <li className='sm:px-6'><a href='/'>Price</a></li>
            <li className='sm:px-6'><a href='/'>Learn</a></li> 
            <li className='sm:px-6'><a href='/'>Businesses</a></li>
            <li className='sm:px-6'><a href='/'>Developers</a></li>
            <li className='sm:px-6'><a href='/'>Company</a></li>
        </ul>}

        {/* Right */}
        <div className='flex justify-end items-center lg:flex lg:justify-between lg:items-center sm:text-sm lg:text-base text-sm'>
            <button className='pr-2 md:pr-3 lg:pr-4 font-bold text-white'>Sign in</button>
            <button className='px-4 py-1 md:px-5 md:py-2 lg:px-6 lg:py-2 text-white bg-slate-600 rounded-2xl cursor-pointer font-bold hover:shadow-lg'>Get started</button>
            {icon ?  <AiOutlineClose onClick={handleToggle} size={35} className='text-white p-[5px] cursor-pointer md:hidden'/> :  <GiHamburgerMenu onClick={handleToggle} size={35} className='text-white p-[5px] cursor-pointer md:hidden'/>}
        </div>
    </div>
  )
}

export default Navbar