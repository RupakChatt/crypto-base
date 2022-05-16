import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='md:flex md:flex-row md:justify-around md:items-center p-2 bg-slate-800 md:w-full md:h-[300px]'>
      {/* Logo */}
      <div className='p-4'>
        
        <h1 className='text-2xl font-extrabold text-white'>Crypto<span className='text-2xl font-extrabold text-purple-700'>Base</span></h1>
       
      </div>
      <div className='flex flex-col items-center p-4'>
        <h5 className='text-xl font-extrabold text-white'>Support</h5>
        <a href="/" className='text-white pt-3'>Contact us</a>
        <a href="/" className='text-white pt-3'>Chat with us</a>
        <a href="/" className='text-white pt-3'>Help center</a>
        <a href="/" className='text-white pt-3'>FAQ</a>
      </div>
      <div className='flex flex-col items-center p-4'>
        <h5 className='text-xl font-extrabold text-white'>Developers</h5>
        <a href="/" className='text-white pt-3'>Cloud</a>
        <a href="/" className='text-white pt-3'>Commerce</a>
        <a href="/" className='text-white pt-3'>Pro</a>
        <a href="/" className='text-white pt-3'>API</a>
      </div>
      <div className='flex flex-col items-center p-4'>
        <h5 className='text-xl font-extrabold text-white'>Company</h5>
        <a href="/" className='text-white pt-3'>About</a>
        <a href="/" className='text-white pt-3'>Information</a>
        <a href="/" className='text-white pt-3'>Legal</a>
        <a href="/" className='text-white pt-3'>Privacy</a>
      </div>
      <div className='flex flex-col mr-3 items-center p-4'>
        <h5 className='text-xl font-extrabold text-white pb-1'>Social</h5>
        <a href='/'><BsFacebook size={35} className='pt-3 text-white' /></a>
        <a href='/'><BsInstagram size={35} className='pt-3 text-white' /></a>
        <a href='/'><BsTwitter size={35} className='pt-3 text-white' /></a>
        <a href='/'><BsLinkedin size={35} className='pt-3 text-white' /></a>
      </div>
    </div>
  )
}

export default Footer