import React, { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../utils/context/CountriesContext';

const Search = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const {countries, error, loading, setFilter} = useContext(CountriesContext);

  useEffect(() => {
    function filterCountrie (countrieName) {
      const contrieByName = countries.filter((countrie) => {
        return countrie.altSpellings.find((value) => value.includes(countrieName));
      });

      return contrieByName;
    };

    if(!loading && countries && !error) {
      setFilter(filterCountrie(search));
    }

    return filterCountrie;
  }, [search]);

  useEffect(() => {
    function filterCountrie (region) {
      const contrieByRegion = countries.filter((countrie) => {
        return countrie.region === region;
      });

      return contrieByRegion;
    };
    if(!loading && countries && !error) {
      setFilter(filterCountrie(region));
    }

    return filterCountrie;
  }, [region]);


  const handleInputSearch = (e) => {
    const {value} = e.target;
    if(!loading && !error) {
      setSearch(value);
    }
  };

  const handleRegionChange = (e) => {
    const {value} = e.target;
    if(!loading && !error) {
      setRegion(value);
    }
  };

  return (
    <div className='search'>
        <div className="wrapper">
          <input onChange={(e) => handleInputSearch(e)} className='items' name='search' id='search' type="search" value={search} placeholder='Search for a Countrie...'/>
          <select onChange={(e) => handleRegionChange(e)} className='items' id="regions">
            <option value="default">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    </div>
  )
}

export default Search