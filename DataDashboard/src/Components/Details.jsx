import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./Weather.css";
import "./Details.css";

function Details() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Miami?unitGroup=metric&key=N2DUVMUMU4LNUZPW22RB4AX4L&contentType=json`;

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();

      // Filter the data to find the object with the specified date
      const dayData = json.days.filter((day) => day.datetime === id)[0];
      setData(dayData);
      console.log(JSON.stringify(dayData) + "==dayData");
    };

    fetchData();
  }, [id]);

  return (
    <div>
  <h1>Weather in Miami, MIA</h1>
  <div className="weather-list">
    {data && (
      <div className="weather-item">
        <div className="weather-item-column">
          <p><strong>Date:</strong>{data.datetime}</p>
          <p><strong>Time:</strong> {data.sunrise} - {data.sunset}</p>
          <p><strong>Moon phase:</strong> {data.moonphase}</p>
          <p><strong>Temperature:</strong> {data.temp}</p>
          
        </div>
        <div className="weather-item-column">
        
          <p><strong>Feels like:</strong> {data.feelslike}</p>
          <p><strong>Conditions:</strong> {data.conditions}</p>
          <p><strong>Humidity:</strong> {data.humidity}</p>
          <p><strong>Windspeed:</strong> {data.windspeed}</p>
          <p><strong>Description:</strong> {data.description}</p>
        </div>
      </div>
    )}
  </div>
</div>

  );
}

export default Details;