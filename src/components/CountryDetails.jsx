import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const CountryDetails = ({ countries, info }) => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [newCountryInfo, setNewCountryInfo] = useState([]);
  const [allCountries, setAllCountries] = useState();


  if (info.length !== 0 && info !== countryInfo) {
    setAllCountries(countries);
    setCountryInfo(info);
    setNewCountryInfo([]);
  }
  const displayNewCountry = ((newCLickedCOuntry) => {
    setNewCountryInfo(newCLickedCOuntry);
  })

  if (newCountryInfo.length !== 0) {

    return (
      <div id="info" className="container m-5 ">
        <div className='row w-50 justify-content-ms-center '>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${newCountryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
          <h3>{newCountryInfo.name.common}</h3>
          <div className='data col'>
            <p>Capital: {newCountryInfo.capital}</p>
          </div>
          <div className='col'>
            <p>Area: {newCountryInfo.area}</p>
          </div>
          <div className='col'>
            <p>Borders :
              <ul>
                <li>
                  {newCountryInfo.borders.map(country => allCountries.map(borderCountry => {

                    if (borderCountry.alpha3Code === country) {

                      return (

                        <p>
                          <Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

                        </p>
                      )
                    }
                  }))}
                </li>
              </ul>
            </p>

          </div>



        </div>
      </div>
    )
  }
  else if (countryInfo.length !== 0) {

    return (
      <div id="info" className=" m-5 " >
        <div className='row justify-content-ms-center '>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`} alt="countryFlag" />
          <h3>{countryInfo.name.common}</h3>
          <div className='data col'>
            <p>Capital: {countryInfo.capital}</p>
          </div>
          <div className='col'>
            <p>Area: {countryInfo.area}</p>
          </div>
          <div className='col'>
            <p>Borders: </p>
            <ul>
              <li>
                {countryInfo.borders.map(country => countries.map(borderCountry => {

                  if (borderCountry.alpha3Code === country) {

                    return (

                      <p>
                        <Link onClick={() => displayNewCountry(borderCountry)}>{borderCountry.name.common}</Link>

                      </p>
                    )
                  }
                }))}
              </li>
            </ul>
          </div>
        </div>
      </div >
    )

  }
}

export default CountryDetails



// className="h2 m-5 "> <table className="table-primary table-bordered d-flex justify-content-around border position-absolute top-50 end-0 translate-middle ">