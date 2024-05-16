import { useContext, useEffect, useState } from 'react'
import './sass/style.scss'
import { CountriesContext } from './utils/context/CountriesContext.js';
import { useFectchData, useFectchDataByRegion, useFectchDataByName } from './utils/hooks/useFetchData';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import ShowFlags from './components/ShowFlags.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const { data, loading, error } = useFectchData();
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if(!loading && !error && data) {
      setCountries([...data]);

    }
  }, [loading, data, error]);  

  return (
    <CountriesContext.Provider value={{ countries, setCountries, loading, error, setFilter, filter }}>
      <>
        <Search />
        <ShowFlags />
      </>
    </CountriesContext.Provider>
  )
}

export default App
