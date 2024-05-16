import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useFectchDataByName } from '../utils/hooks/useFetchData';

const AboutCountrie = () => {
    const { aboutId } = useParams();
    const { data, loading, error } = useFectchDataByName(aboutId);
    const [countrie, setCountrie] = useState([]);
    console.log(aboutId);

    useEffect(() => {
        if(!loading && !error && data) {
            setCountrie(data);
    
        }
      }, [loading, data, error]);  
    return (
        <div className='about-page'>
            <Link to='/'>Back</Link>
            <h1>{data && data[0].name.common}</h1>
        </div>
    )
}

export default AboutCountrie