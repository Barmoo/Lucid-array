import React from 'react'
import figma1 from '../assets/images/figma1.jpg'
import figma2 from '../assets/images/figma2.jpg'
import figma3 from '../assets/images/figma3.jpg'



const hero = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-blue-950 align-middle'>
        <div className='h-96 flex flex-col justify-center items-center space-y-2 bg-blue-950'>
        <h2 className='text-[3rem] text-white font-semibold w-[60%] text-center'>
                    Technology Solutions for your Business.
        </h2>
            <p className='text-[11px] text-white'>We build relaible and scalable technology platforms for digital business.</p>
            <div className='flex flex-row  text-white gap-3'>
                <button className='border-0 px-4 py-0.5 rounded-md bg-blue-400 text-[11px] '>Our Work</button>
                <button className='border-0 px-4 py-0.5 rounded-md bg-blue-900 text-[11px] '>Contact Us</button>
            </div>
        </div>
        <div className='flex flex-row gap-8 -mb-60'>
            <img src={figma1} alt="" className='h-96 w-96 object-cover' />
            <img src={figma2} alt="" className='h-96 w-48 object-cover' />
            <img src={figma3} alt="" className='h-96 w-48 object-cover' />
        </div>
    </div>
  )
}

export default hero