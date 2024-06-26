import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24  text-white absolute bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block text-lg py-6 w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black md:py-4 py-1 md:px-12 px-3 text-xl hover:bg-opacity-80 rounded-lg'>▶️ Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-45 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle