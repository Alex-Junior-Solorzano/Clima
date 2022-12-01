import React from 'react'
import  styles  from "../styles/WeatherMainInfo.module.css";

const WeatherMainInfo = ({ weather }) => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location?.name}</div>
            <div className={styles.country}>{weather?.location?.country}</div>
            <div className={styles.row}>
                <div>
                    <img
                        src={`http:${weather?.current?.condition.icon}`}
                        width='128px'
                    />
                </div>
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}>{weather?.current?.condition.text}</div>
                    <div className={styles.current}>{weather?.current?.temp_c}°</div>
                </div>
            </div>
            <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d510597.80585579545!2d${weather?.location?.lon}1!3d${weather?.location?.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1669833240590!5m2!1ses!2sec` }
            width="100%" 
            height="450" 
            style={{border:0}}
            loading="lazy" 
            ></iframe>
        </div>
    )
}

export default WeatherMainInfo