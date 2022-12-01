import React, { useState, useEffect } from 'react'
import WeatherForm from './WeatherForm.jsx';
import WeatherMainInfo from './WeatherMainInfo.jsx';

import styles from "../styles/WeatherApp.module.css";
import Loading from './Loading.jsx';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? !''}`
  }, [weather])

  async function loadInfo(city = 'portoviejo') {
    try {
      const resp = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

      const json = await resp.json();

      setTimeout(() => {
        setWeather(json);
      }, 2000);

      console.log(json);
    } catch (e) {

    }
  }


  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  }


  return (
    <div className={styles.weatherContainer}>
      <div className='titulo'>
                <img className='logo'
                  src= {require(`../images/k2.png`)}
                  alt='Logo'
                />
                <h1>Aplicacion del Clima </h1>
            </div>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      

    </div>
  )
}

export default WeatherApp