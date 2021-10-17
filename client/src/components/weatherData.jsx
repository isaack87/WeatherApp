import React from 'react';
import config from '../../../config.js';
import axios from 'axios'
import $ from 'jquery'

const WeatherBox = (props) => {

  console.log(props.main.dt)
  const sunrise = new Date( (props.main.dt - props.main.timezone) * 1000)
  console.log(sunrise)

  return (
    <div className="weatherbox ">
      <div className="text">
        <p><strong>Current City: {props.main.name}</strong></p>
        <p><img src={`http://openweathermap.org/img/w/${props.main.icon}.png`} width="100" height="80" alt="icon"/></p>
        <p>Current Temp: {props.main.temp}</p>
        <p>Weather: {props.main.description}</p>
        <p>Feels-Like: {props.main['feels_like']}</p>
        <p>High: {props.main['temp_max']}  |  Low: {props.main['temp_min']}</p>
        <p>Wind Speed: {props.main.windspeed} miles per hour</p>
        <p>Time: {sunrise.toString()}</p>
        </div>
    </div>
  )
}

export default WeatherBox;

