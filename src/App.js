import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import SearchLine from './components/SearchLine';
import TempnDetails from './components/TempnDetails';
import TimenLocation from './components/TimenLocation';
import TopButtons from './components/TopButtons'; 
import getFormattedWeatherData from './services/WeatherService';

function App() {

  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnits]= useState('metric')
  const [weather, setWeather]= useState(null)

  useEffect(()=>{
    const fetchWeatherData = async () => {
      await getFormattedWeatherData( {...query, units}).then(
        (data)=>{
          setWeather(data);
        }
      )
     
    }
  
    fetchWeatherData();
  
  }, [query, units])

 
  return (
    <div className='mx-auto  max-w-lg bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 p-5'>
<TopButtons/>
<SearchLine/>

{weather && (
  <div>
  <TimenLocation weather={weather}/>
<TempnDetails weather={weather}/>
<Forecast title="HOURLY FORECAST"/>
<Forecast title="MONTHLY FORECAST"/>
    </div>
)}

    </div>
  );
}

export default App;


