import { createContext } from 'react';

export const CountriesContext = createContext({
    countries: [],
    filter: [],
    setCountriesData: () => {},
});
