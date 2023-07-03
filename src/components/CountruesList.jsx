import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';


const countrisURL = "https://ih-countries-api.herokuapp.com/countries";
const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch(countrisURL).then(country => country.json()).then(country => setCountries(country.sort((a,b) => a.name.common.localeCompare(b.name.common))));
        
    }, []);
    
    return (
        <div>
            <div>
                <h3>Lista de Countries</h3>
                {countries && countries.map((country) => {
                    return (
                        <div key={country._id} id='main' >

                            <Link className='listCountrie ' to={'/'} >
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                <p>{country.name.common}</p>

                            </Link>
                        </div>
                    )

                })}
            </div>
                <CountryDetails country={countries} url={countrisURL}/>
        </div>
    )
}


export default CountriesList;