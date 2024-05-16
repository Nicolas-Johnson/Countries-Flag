import React, { useContext, useEffect, useState } from 'react'
import CardCountrie from './CardCountrie'
import { CountriesContext } from '../utils/context/CountriesContext';

const ShowFlags = () => {
    const [show, setShow] = useState([]);
    const {countries, error, loading, filter} = useContext(CountriesContext);
    const [pagination, setPage] = useState({
        page: 1,
        limit: 8,
        total: 0,
    })

    const pageUpAndDown = (direction) => {
        if (direction === 'up') {
            setPage((current) => {
                return {
                   ...current,
                    page: current.page + 1
                }
            });
        } else if (pagination.page > 1 && direction === 'down') {
            setPage((current) => {
                return {
                   ...current,
                    page: current.page - 1
                }
            });
        }
    }

    const setPages = (array) => {
        const {page, limit} = pagination;
        const start = (page - 1) * limit;
        const end = page * limit;
        const newShow = array.slice(start, end);
        setShow(newShow);
    };

    useEffect(() => {
        if(!error && !loading && countries) {
            setPages(countries);
           } 
    
    }, [pagination, countries, error, loading]);

    useEffect(() => {
        if(!error && !loading && (filter.length > 0)) {
            setPages(filter);
           } 
    
    }, [pagination, filter]);


    return (
        <div className='show-flags'>
            <div className="wrapper">
                {filter ? show.map((countrie) => {
                    const {flags, name, population, region, capital} = countrie;
                    return <CardCountrie key={name.common} countrie={countrie} />
                }) : <>Loading ...</>}
            </div>
            <div className="pages">
                <button onClick={() => pageUpAndDown('down')} className='items pagesBtn prev'>&lt;</button>
                <button onClick={() => pageUpAndDown('up')} className='items pagesBtn next'>&gt;</button>
            </div>
        </div>
    )
}

export default ShowFlags

// page 1 countries to show 8

//se tiver filtros
//se
    //Pagina x mostra 1 a 8 de filter

// se nao tiver filtro
    //Pagina x mostra  a 8 de countries
