import React from 'react'

const TimenLocation = ({weather: dt, timezone, name, country}) => {
  return (
    <div className='flex flex-col items-center justify-center my-1'>
        <div className='text-white text-lg font-extralight flex items-center justify-center'>Tueday blah blah date and time</div>
        <div className='font-semibold text-xl text-white my-4 flex items-center justify-center'>{`${name}, ${country}`}</div>

    </div>
  )
}

export default TimenLocation