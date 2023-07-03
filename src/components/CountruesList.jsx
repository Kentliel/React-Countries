import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const countrisURL = "https://ih-countries-api.herokuapp.com/countries";
const CountriesList = () => {
    const [countries, setCountries] = useState(false);

    useEffect(() => {
        fetch(countrisURL).then(res => res.json()).then(res => setCountries(res));
    }, []);
    return (
        <div>

            <h3>Lista de Countries</h3>
            {countries && countries.map((countrie) => {
                return (
                    <div key={countrie._id} className='listCountrie'>
                        <Link>{countrie.alpha3Code}</Link>
                    </div>
                )

            })}
        </div>
    )
}

export default CountriesList;