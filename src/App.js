import React, { Component } from 'react';
import axios from 'axios';
import './weather.css';
import moment from 'moment';

const SECRET_KEY = process.env.REACT_APP_WEATHER_SECRET_KEY;
const ACCESS_ID = process.env.REACT_APP_WEATHER_ACCESS_ID;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info: null,
      toggle: false
    }
  }

  getData = () => {
    axios.get(`http://api.aerisapi.com/forecasts/11101?client_id=${ACCESS_ID}&client_secret=${SECRET_KEY}`)
      .then((res) => {
        const weatherInfo = res.data.response[0].periods;
  
        this.setState({ 
          info: weatherInfo
        })
  
      });
  };

  handleToggle = () => {
    const {toggle} = this.state;
      this.setState({ 
        toggle: !toggle 
      })
  }
  
  componentDidMount() {
    this.getData();
    this.handleToggle();
  }


  render() {
    const {info, toggle} = this.state;
    const textDisplay =  toggle ? 'Show Celsius' : 'Show Fahrenheit'
    return (
      <div className=''>
        <h1>Weather App</h1>
        <button className='center weatherButton' onClick={this.handleToggle}>{textDisplay}</button>
        <div className='weather-container'>
        {
          !info ? 'Weather Loading...' : info.map((date) => { 
            const nameOfDay = moment(date.dateTimeISO).format('dddd'); 
            const dateName = moment(date.dateTimeISO).format('YYYY-MM-DD'); // 2018-09-23
              return (
                <div className='weather-item'>
                  <h4>{dateName}</h4>
                  <h3>{nameOfDay}</h3>
                  <img src={`./icons/${date.icon}`} alt={date.icon}></img>

                  {toggle ? 
                    <p>
                    High: {date.maxTempF} ℉<br/>
                    Low: {date.minTempF} ℉
                    </p>
                  :  
                    <p>
                  High: {date.maxTempC} ℃<br/>
                  Low: {date.minTempC} ℃
                  </p>
                  }
                </div>
              );
            })
        }
        </div>    
      </div>
    );
  }
}

export default App;
