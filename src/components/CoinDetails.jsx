import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import DOMPurify from 'dompurify'




const CoinDetails = () => {
  const [data, setData] = useState([])
  const params = useParams()

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
    }).catch((err) => { console.log(err) })
  }, [url])

  return (
    <div className='p-3 bg-gradient-to-b from-slate-200 to-slate-300'>
      <div className='flex items-center'>
        {data.image ? <img src={data.image.small} alt='logo' /> : 'N/A'}
        <span className='p-4 text-2xl font-extrabold'>{data.name}</span>
        <span className='text-xl text-slate-500'>{data.symbol ? <p>{data.symbol}/usd</p> : 'N/A'}</span>
      </div>

      <div className='mt-2 border border-slate-500'>
        <div className='flex justify-between items-center p-3 text-5xl font-bold'>
            <div className='flex flex-row'>
          {data.market_data?.current_price ? <h1>$ {data.market_data.current_price.usd.toLocaleString()}</h1> : 'N/A'}
          <span className='pl-3 font-thin'>{data.market_data?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)} %</p> : 'N/A'}</span>
            </div>
        
        </div>
         

        <div className='w-full h-0 border border-slate-400'></div>

        <h2 className='pl-3 text-2xl font-bold pd-2'>Market Stats</h2>
        {/* Data Grid */}
        <div className='md:grid md:grid-cols-4 md:gap-x-4 md:gap-y-3 grid grid-cols-2 gap-3'>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>POPULARITY</h4>
            {data.market_cap_rank ? <p># {data.market_cap_rank}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>MARKET CAP</h4>
            {data.market_data?.market_cap ? <p>$ {millify(data.market_data?.market_cap.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>LIQUIDITY SCORE</h4>
            {data.liquidity_score ? <p>{data.liquidity_score.toFixed(2)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>CIRCULATING SUPPLY</h4>
            {data.market_data?.circulating_supply ? <p>{millify(data.market_data?.circulating_supply)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>TOTAL SUPPLY</h4>
            {data.market_data?.total_supply ? <p>{millify(data.market_data?.total_supply)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>TOTAL VOLUME</h4>
            {data.market_data?.total_volume ? <p>$ {millify(data.market_data?.total_volume.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>ALL TIME HIGH</h4>
            {data.market_data?.ath ? <p>$ {millify(data.market_data?.ath?.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>ALL TIME HIGH CHANGE</h4>
            {data.market_data?.ath_change_percentage ? <p>{data.market_data?.ath_change_percentage?.usd.toFixed(2)} %</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>ALL TIME LOW</h4>
            {data.market_data?.atl ? <p>$ {millify(data.market_data?.atl?.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>ALL TIME LOW CHANGE</h4>
            {data.market_data?.atl_change_percentage ? <p>{data.market_data?.atl_change_percentage?.usd.toFixed(2)} %</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>HIGH (1D)</h4>
            {data.market_data?.high_24h ? <p>$ {millify(data.market_data?.high_24h?.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>LOW (1D)</h4>
            {data.market_data?.low_24h ? <p>$ {millify(data.market_data?.low_24h?.usd)}</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>SENTIMENTS VOTE UP</h4>
            {data.sentiment_votes_up_percentage ? <p>{data.sentiment_votes_up_percentage} %</p> : 'N/A'}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='font-semibold text-slate-600'>SENTIMENTS VOTE DOWN</h4>
            {data.sentiment_votes_down_percentage ? <p>{data.sentiment_votes_down_percentage} %</p> : 'N/A'}
          </div>
        </div>
      </div>
      {/* About */}
      <div className='mt-2 border border-slate-500'>
        <h2 className='pl-3 text-2xl font-bold pd-2'>About {data.name}</h2>
        <p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.description ? data.description.en : ''),
        }} className='p-4'></p>
      </div>
    </div>
  )
}

export default CoinDetails