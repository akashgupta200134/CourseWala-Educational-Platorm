import React from 'react'
import './Loader.css';



export const Loader = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
    
    <div className='loader'></div>
    <p className='text-black text-lg font-semibold'>Loading...</p>

    </div>
  )
}


export default Loader;