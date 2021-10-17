import React from 'react';

const WeatherTitle = (props) => {
  return (
  <div>
    <h1 className="weatherTitle"> City of {props.name}'s Weather Forecast 🌧️  </h1>
  </div>
  )
}

export default WeatherTitle;
