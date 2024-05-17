import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useFectchDataByName } from '../utils/hooks/useFetchData';

const AboutCountrie = () => {
    const { aboutId } = useParams();
    const { data, loading, error } = useFectchDataByName(aboutId);
    const [countrie, setCountrie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!loading && !error && data) {
            setCountrie(...data);
    
        }
      }, [loading, data, error]);

        const handleBack = (routString) => {
        return navigate(routString);
    };

    return (
        <div className='about-page'>
            <button className='items back' onClick={() => handleBack('/')}>Back</button>
            {countrie.name ? 
                <div className="flag-about">
                    <img src={countrie.flags.svg} alt={`${countrie.name} flag`} />
                    <div className="countrie-infos">
                        <h1>{countrie.name.common}</h1>
                        <div className="countrie-infos-dados">
                            <div className="right">
                                <h2>Population: {countrie.population.toLocaleString()}</h2>
                                <h2>Region: {countrie.region}</h2>
                                <h2>Sub Region: {countrie.subregion}</h2>
                                <h2>Capital: {countrie.capital}</h2>
                                <h2>Top Level Domain: {countrie.tld.map((d, i) => <span key={d + i}>{d}</span>)}</h2>
                            </div>
                        </div>
                        <div className="borders">
                            <h2>Border Countries: </h2>
                            <div className='b-c'>
                                {countrie.borders.map((border) => {
                                    const string = `/about/${border}`;
                                    return <button key={border} onClick={() => handleBack(string)} className='items'>{border}</button>})}
                                
                            </div>
                        </div>
                    </div>
                </div>
            : <>Loading ...</>}
        </div>
    )
}

export default AboutCountrie