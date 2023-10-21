import React, { useState, useEffect } from 'react';
import './Weather.css';

import MoonImage from './MoonPhase';
import Navigation from './Navigation';
import {Link} from "react-router-dom";

import { StyleSheet } from 'react';
import {
  LineChart,
  BarChart,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

function Weather() {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [moonPhase, setMoonPhase] = useState(0);

  useEffect(() => {
    fetchAllWeatherData().catch(console.error);
  }, []);

  const fetchAllWeatherData = async () => {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Miami?unitGroup=metric&key=N2DUVMUMU4LNUZPW22RB4AX4L&contentType=json"
    );
    const json = await response.json();
    console.log(json);
    setOriginalList(json.days);
    setList(json.days);
  };

  const filterData = () => {
    let filteredDataList = [...originalList];

    // Filter by date
    if (selectedDate !== "") {
      const selectedDateValue = new Date(selectedDate);
      filteredDataList = filteredDataList.filter((day) => {
        const dayDate = new Date(day.datetime);
        return dayDate.toDateString() === selectedDateValue.toDateString();
      });
    }

    // Filter by moon phase
    filteredDataList = filteredDataList.filter((day) => {
      return day.moonphase <= moonPhase;
    });

    setList(filteredDataList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterData();
  };

  return (
    <div className="container">
      <div className="left-container"> 
      <div className="cards-row">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Date</h3>
            {list.length > 0 && (
              <div className="card-text">
                <p>{originalList[0].datetime}</p>
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Temperature</h3>
            {list.length > 0 && (
              <div className="card-text">
                <p>{originalList[0].temp}°C</p>
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Moon Phase</h3>
            {list.length > 0 && (
              <div className="card-text">
                <p><MoonImage moonphase={originalList[0].moonphase} /></p>
              </div>
            )}
          </div>
        </div>
      </div>

      <br></br>

      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </label>
        <label>
          Moon Phase:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={moonPhase}
            onChange={(event) => setMoonPhase(parseFloat(event.target.value))}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <br></br>

      <div className="table-container">
        <table className="center-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Moon phase</th>
              <th>Temperature</th>
              <th>Conditions</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {list.map((day) => (
              <tr key={day.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{day.datetime}</td>
                <td>{day.sunset}</td>
                <td key={day.id + 'moonphase'}><MoonImage moonphase={day.moonphase} /></td>
                <td>{day.temp}</td>
                <td>{day.conditions}</td>
                <td>
                  <Link to={`details/${day.datetime}`}>More Info</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <div className="rightContainer">
      <div className="graph-container">
        <h3>Moon Phase Chart</h3>
        <ResponsiveContainer width={500} height={400}>
          <LineChart data={list}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="moonphase" stroke="#8884d8" name="Moon Phase" />
          </LineChart>
        </ResponsiveContainer>
    </div>
    <br></br>
      <div className="graph-container">
        <h3>Temperature Chart (Bar)</h3>
        <ResponsiveContainer width={500} height={400}>
          <BarChart data={list}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temp" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
    
  );
}
export default Weather;
