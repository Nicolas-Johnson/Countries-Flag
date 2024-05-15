import { useContext, useEffect, useState } from 'react'
import './sass/style.scss'
import { CountriesContext } from './utils/context/CountriesContext.js';
import { useFectchData, useFectchDataByRegion, useFectchDataByName } from './utils/hooks/useFetchData';
import Header from './components/Header.jsx';

function App() {
  const { data, loading, error } = useFectchData();
  const [countries, setCountries] = useState({countries: 'countries'});

  useEffect(() => {
    if(!loading && !error && data) {
      setCountries(data);
    }
  }, [loading, data, error]);



  return (
    <CountriesContext.Provider value={{ ...countries, setCountries, loading, error }}>
      <>
        <Header />
      </>
    </CountriesContext.Provider>
  )
}

export default App
