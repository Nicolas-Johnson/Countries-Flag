import { useContext, useEffect, useState } from 'react'
import './sass/style.scss'
import { CountriesContext } from './utils/context/CountriesContext'
import { useFectchData, useFectchDataByRegion, useFectchDataByName } from './utils/hooks/useFetchData';

function App() {
  const { data, loading, error } = useFectchData();
  const [countries, setCountries] = useState({countries: 'countries'});

  useEffect(() => {
    if(!loading && !error && data) {
      setCountries(data);
    }
  }, [loading, data, error]);



  return (
    <CountriesContext.Provider value={{ ...countries, setCountries }}>
      <div className="app"></div>
    </CountriesContext.Provider>
  )
}

export default App
