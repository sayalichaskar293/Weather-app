import React from 'react'

const Forecast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='font-medium text-white'>{title}</p>
            </div>
            <hr className=' my-2' />
            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col  text-white text-sm '>
                    <p className='font-light'>04:30 PM</p>
                    <img src='' className='my-1' alt='image'></img>
                    <p className='font-medium'>22 </p>
                </div>

                <div className='flex flex-col  text-white text-sm '>
                    <p className='font-light'>04:30 PM</p>
                    <img src='' className='my-1' alt='image'></img>
                    <p className='font-medium'>22 </p>
                </div>

                <div className='flex flex-col  text-white text-sm '>
                    <p className='font-light'>04:30 PM</p>
                    <img src='' className='my-1' alt='image'></img>
                    <p className='font-medium'>22 </p>
                </div>

                <div className='flex flex-col  text-white text-sm '>
                    <p className='font-light'>04:30 PM</p>
                    <img src='' className='my-1' alt='image'></img>
                    <p className='font-medium'>22 </p>
                </div>

                <div className='flex flex-col  text-white text-sm '>
                    <p className='font-light'>04:30 PM</p>
                    <img src='' className='my-1' alt='image'></img>
                    <p className='font-medium'>22 </p>
                </div>

             
            </div>

        </div>
    )
}

export default Forecast