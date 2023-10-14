import React from 'react';
import './Card.css'; 

function WeatherCard({ data }) {
  return (
    <div className="card">
      <div className="card-title">Fecha: {data.datetime}</div>
      <div className="card-temperature">Temperatura: {data.temp}°C</div>
      <div className="card-moonphase">Fase lunar: {data.moonphase}</div>
    </div>
  );
}

export default WeatherCard;
