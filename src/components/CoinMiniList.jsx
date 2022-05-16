import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import CoinDetails from './CoinDetails'
import CoinList from './CoinList'

const CoinMiniList = () => {
    const [data, setData] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [url])

    return (
        <div className='mt-10 mb-10'>
            <Link to='/coins' element={<CoinList/>}>
                <button className='text-slate-700 cursor-pointer font-bold md:ml-24 ml-7 md:max-w-[150px]'>See more coins</button>
            </Link>
            <div className='md:flex md:flex-row md:ml-20 flex flex-wrap justify-center'>
                {data.map(coin => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<CoinDetails />} key={coin.id}>
                            <div className='flex flex-row justify-center items-center p-6 m-4 w-[170px] h-[170px] rounded-md shadow-md text-center bg-slate-100 cursor-pointer hover:shadow-lg'>

                                <div>
                                    <div>
                                        <img src={coin.image} alt="logo" className='w-[70px] m-auto p-1' />
                                    </div>
                                    <div>
                                        <h5 className='font-bold'>{coin.name}</h5>
                                        <p>${coin.current_price.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        {coin.price_change_percentage_24h < 0 ? (
                                            <span className='text-red-700 flex items-center'>
                                                <FiArrowDown className='text-red-700' />
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        ) : (
                                            <span className='text-green-700 flex items-center'>
                                                <FiArrowUpRight className='text-green-700' />
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}
export default CoinMiniList