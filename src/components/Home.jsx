import React from 'react'
import Hero from '../assets/trade.png'
import Portfolio from '../assets/hero-img.png'
import { MdManageAccounts } from 'react-icons/md'
import { FaMobile, FaBitcoin } from 'react-icons/fa'
import { AiOutlineStock, AiOutlineArrowRight } from 'react-icons/ai'
import { RiBankCardFill, RiAccountPinBoxFill } from 'react-icons/ri'
import CoinMiniList from './CoinMiniList'


const Home = () => {

    return (
        <div className='bg-gradient-to-b from-slate-200 to-slate-300'>
            <div className='md:flex md:justify-between md:items-center'>
                {/* Top */}

                {/* Left */}
                <div>
                    <h4 className='text-xl text-blue-700 p-3 flex flex-row items-center cursor-pointer'><FaBitcoin size={30} className='p-1' /> Create your portfolio <AiOutlineArrowRight size={30} className='pl-1' /></h4>
                    <h1 className='text-7xl font-bold p-3'>Start your crypto journey today</h1>
                    <h4 className='text-xl font-semibold p-3'>CryptoBase is the easiest and the best place to trade cryptocurrencies. Sign up and get started today</h4>
                    <div className='p-4'>
                        <input type="email" placeholder='Enter your email' className='border-slate-500 hover:border-slate-700 border rounded-2xl p-4' />
                        <button className='text-white bg-slate-600 rounded-2xl cursor-pointer font-bold p-4 ml-3 hover:shadow-lg'>Get started</button>
                    </div>
                </div>
                {/* Right */}
                <div className='flex justify-center flex-wrap'>
                    <img src={Hero} alt="img" className=' md:max-w-full md:mr-[120px] md:mt-[10px] md:h-[550px] max-w-[50%] md:ml-[100px] ' />
                </div>
            </div>

            {/* Center */}
            <div className='flex flex-wrap'>
            <CoinMiniList />

            </div>

            {/* Portfolio */}
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold p-3'>Create your crypto portfolio now!</h1>
                <h5 className='text-lg text-slate-500 p-3'>CryptoBase has a host of features that makes your crypto journey easy</h5>
            </div>
            <div className='md:flex md:justify-between md:items-center '>
                {/* Left */}
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <MdManageAccounts size={50} className='text-blue-700' />
                        <div className='flex flex-col'>
                            <h5 className='text-2xl font-bold p-3'>Manage your account</h5>
                            <h6 className='text-lg text-slate-500 pl-3'>Buy and sell popular cryptos from one place</h6>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <FaMobile size={40} className='text-blue-700' />
                        <div className='flex flex-col'>
                            <h5 className='text-2xl font-bold p-4'>Mobile Apps</h5>
                            <h6 className='text-lg text-slate-500 pl-3'>Stay on top with our mobile responsive app</h6>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div>
                    <img src={Portfolio} alt="img" className='max-w-[80%] m-auto' />
                </div>
            </div>

            {/* Banner */}
            <div className='md:w-full md:h-[170px] p-2 bg-slate-700 md:flex md:justify-between md:items-center mt-10'>
                <div className='flex flex-col m-[5rem] items-center'>
                    <h2 className='font-bold text-white text-3xl'>$14,00,000</h2>
                    <h3 className='text-slate-500 text-xl'>Quarterly Trade Volume</h3>
                </div>
                <div className='flex flex-col m-[5rem] items-center'>
                    <h2 className='font-bold text-white text-3xl'>90+</h2>
                    <h3 className='text-slate-500 text-xl'>Countries Supported</h3>
                </div>
                <div className='flex flex-col m-[5rem] items-center'>
                    <h2 className='font-bold text-white text-3xl'>9.5+ Cr.</h2>
                    <h3 className='text-slate-500 text-xl'>Verified Worldwide Users</h3>
                </div>
            </div>
            {/* Get Started */}
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-4xl font-bold p-3'>Super quick setup!</h1>
                <h5 className='text-lg text-slate-500  p-3'>We support all the popular digital currency you can think of. And more!</h5>
            </div>
            <div className='md:flex md:justify-between md:items-center h-screen md:h-full'>
                <div className='flex flex-col md:m-[3rem] m-[3rem] items-center'>
                    <RiAccountPinBoxFill size={50} className='text-blue-700' />
                    <h3 className='text-2xl font-bold p-3'>Create an account</h3>
                </div>
                <div className='flex flex-col md:m-[3rem] m-[3rem] items-center'>
                    <RiBankCardFill size={50} className='text-blue-700' />
                    <h3 className='text-2xl font-bold p-3'>Link bank account</h3>
                </div>
                <div className='flex flex-col md:m-[3rem] m-[3rem] items-center'>
                    <AiOutlineStock size={50} className='text-blue-700' />
                    <h3 className='text-2xl font-bold p-3'>Start trading</h3>
                </div>
            </div>
        </div>
    )
}

export default Home