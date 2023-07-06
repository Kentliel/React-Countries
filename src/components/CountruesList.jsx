import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails';


const countrisURL = "https://ih-countries-api.herokuapp.com/countries";
const CountriesList = () => {
    const [countries, setCountries] = useState([]);
    const [countrySelected, setCountrySelected] = useState([]);

    useEffect(() => {
        fetch(countrisURL).then(country => country.json()).then(country => setCountries(country.sort((a, b) => a.name.common.localeCompare(b.name.common))));

    }, []);

    const showInformation = ((country) => {
        setCountrySelected(country)
    })



    return (
        <div className="ms-5 mt-5 d-flex justify-content-around align-self-sm-center ">
            <div className='overflow-y-scroll vh-100 '>
                <h3>Lista de Countries</h3>
                {countries && countries.map((country) => {
                    return (
                        <div key={country._id} id='main' >

                            <Link className='listCountrie ' to={`/${country.alpha3Code}`} onClick={() => showInformation(country)} >
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='countryFlag' />
                                <p>{country.name.common}</p>

                            </Link>
                        </div>
                    )

                })}
            </div>
            <Routes>
                <Route path='/:alfa3code' element={<CountryDetails info={countrySelected} countries={countries} />} />
            </Routes>
        </div>
    )
}


export default CountriesList;