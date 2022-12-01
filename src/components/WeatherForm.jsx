import React, {useState} from 'react'
import styles from "../styles/WeatherForm.module.css";

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        if(value !== ''){
            setCity(value);
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city)
    }



  return (
    <form className={styles.container} onSubmit={handleSubmit}>
        <input placeholder='Ingresa una ciudad aquí' className={styles.input} type="text" onChange={onChange}/>
    </form>
  )
}

export default WeatherForm