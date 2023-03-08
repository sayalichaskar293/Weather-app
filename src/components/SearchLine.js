import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const SearchLine = () => {
  return (
    <div className='flex flex-row items-center justify-around my-5 '>
        <div className='flex flex-row items-center justify-center m-5'>
            <input className='bg-white text-grey rounded-xl py-1 px-2 m-1 focus:outline-none w-full capitalize placeholder:lowercase' placeholder='search for city'></input>
            <SearchIcon sx={{ fontSize: "1.5rem" }}  className='text-white m-1 cursor-pointer transition ease-out hover:scale-110'></SearchIcon>
            <LocationOnOutlinedIcon sx={{ fontSize: "1.5rem" }} className='text-white m-1 cursor-pointer transition ease-out hover:scale-110'/>
        </div>
        <div className='flex flex-row text-white items-center justify-center mr-3'>
            <button className='text-white m-1 ' name='metric'>°C</button>
            <p className='text-white m-1 ' name='metric'> |</p>
            <button className='text-white  m-1 ' name='imperial'>°F</button>
        </div>
    </div>
  )
}

export default SearchLine