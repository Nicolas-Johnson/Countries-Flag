import { useContext } from 'react'
import './sass/style.scss'
import { CountriesContext } from './utils/context/CountriesContext'

function App() {
  const [countriesData, setCountriesData] = useContext({countries: 'countries'});

  return (
    <CountriesContext.Provider value={{ ...countriesData, setCountriesData }}>
      <>Countries</>
    </CountriesContext.Provider>
  )
}

export default App
