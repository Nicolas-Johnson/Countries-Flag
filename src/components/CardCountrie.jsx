import React from 'react'
import PropTypes from 'prop-types';

const CardCountrie = ({ countrie }) => {
    const { name, population, region, capital, flags } = countrie;
    const captalToUse = capital ? capital[0] :  'No Capital';

  return (
    <div className='items'>
        <a href="#">
        <img src={flags.svg} alt={`Flag of ${name.common}`} />
        <div className="infos">
            <h1>{name.common}</h1>
            <h2><span>Population: </span>{population}</h2>
            <h2><span>Region: </span>{region}</h2>
            <h2><span>Capital: </span>{captalToUse}</h2>
        </div>
        </a>
    </div>
  )
}

export default CardCountrie

CardCountrie.propTypes = {
    countrie: PropTypes.object.isRequired
};