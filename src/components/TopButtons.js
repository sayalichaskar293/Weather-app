import React from 'react'

const TopButtons = () => {

    const cities=[
        {
            id: 1,
            title: 'london'
        },
        {
            id: 2,
            title: 'new york'
        },
        {
            id: 3,
            title: 'mumbai'
        },
        {
            id: 4,
            title: 'tokyo'
        },
        {
            id: 5,
            title: 'paris'
        }
    ]

  return (
    <div className='flex items-center justify-around my-5'>
    {
        cities.map((city)=>(
            <button key={city.id} className='text-white text-base font-medium '>{city.title}</button>
        ))
    }        
    </div>
  )
}

export default TopButtons