import React, { useState, useEffect } from 'react';
import './Weather.css';
import './sideNav';
import SideNav from './sideNav';
import MoonImage from './MoonPhase';

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
    console.log(json.days);
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
    <view>
     
     <view className="cards-row">
      <view className="card">
        <view className="card-body">
          <h3 className="card-title">Date</h3>
          {list.length > 0 && (
            <div className="card-text">
              <p>{originalList[0].datetime}</p>
            </div>
          )}
        </view>
      </view>

  <view className="card">
    <view className="card-body">
      <h3 className="card-title">Temperature</h3>
      {list.length > 0 && (
        <view className="card-text">
          <p>{originalList[0].temp}°C</p>
        </view>
      )}
    </view>
  </view>

  <view className="card">
    <view className="card-body">
      <h3 className="card-title">Moon Phase</h3>
      {list.length > 0 && (
        <view className="card-text">
          <p><MoonImage moonphase={originalList[0].moonphase} /></p>
        </view>
      )}
    </view>
  </view>
</view>


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
      <view className="table-container">
        <table className="center-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Moon phase</th>
              <th>Temperature</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((day) => (
              <tr key={day.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{day.datetime}</td>
                <td>{day.sunset}</td>
                <td><MoonImage moonphase={day.moonphase} /></td>
                <td>{day.temp}</td>
                <td>{day.conditions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </view>
      <SideNav />
    </view>
  );
}

export default Weather;
