import React from 'react'
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const TempnDetails = () => {
  return (
    <>
    <div className='flex items-center justify-center my-3 text-lg text-cyan-300'>
        <p>Cloudy</p>
    </div>

    <div className='flex flex-row items-center justify-between text-white py-2  px-7'>
      <img className='w-20' src='' alt='sun image'></img>
      <p className='flex items-center justify-center text-5xl '>19°</p>
      <div className='flex flex-col font-light text-sm text-white items-center justify-center space-y-2'>
        <p><DeviceThermostatOutlinedIcon  sx={{ fontSize: "1rem" }}/> Real feel: <span>18</span> </p>
        <p><OpacityOutlinedIcon sx={{ fontSize: "1rem" }}/> Humidity: <span>18</span> </p>
        <p><AirOutlinedIcon sx={{ fontSize: "1rem" }}/> Wind: <span>18</span> </p>
        </div>
    </div>
    <div className='flex flex-row items-center justify-center text-sm text-white font-light space-x-2 py-3 my-3'>
      <p><WbSunnyOutlinedIcon sx={{ fontSize: "1rem" }}/> Rise: <span className='font-medium ml-1'>8:45 AM</span> </p>
      <p>|</p>
      <p><WbTwilightOutlinedIcon sx={{ fontSize: "1rem" }}/> Set: <span className='font-medium ml-1'></span> </p>
      <p>|</p>
      <p><ArrowUpwardOutlinedIcon sx={{ fontSize: "1em" }}/> High: <span className='font-medium ml-1'></span> </p>
      <p>|</p>
      <p><ArrowDownwardOutlinedIcon sx={{ fontSize: "1rem" }}/> Low: <span className='font-medium ml-1'></span> </p>
    </div>
    </>
  )
}

export default TempnDetails