import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import WeatherTitle from './components/weatherTitle.jsx'
import WeatherBox from './components/weatherData.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: 'Chandler',
      weatherdata: [],
      name: '',
      icon: '',
      temp: '',
      description: '',
      searchedCity: '',
      timezone: '',
      dt: '',
      term: '',
      windspeed: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.searchWeather = this.searchWeather.bind(this)
    this.getMap = this.getMap.bind(this)
  }

  componentDidMount() {

    if (this.state.searchedCity === undefined) {
      this.getWeather(this.state.default)
    }
  }

  getWeather = (e) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=37d624d954f00691d23b170796c345e2&units=imperial`)
      .then(response => {
        var info = response.data
        // Only change if city is valid
        if (info.name !== undefined) {
          this.setState({
            weatherdata: info,
            name: info.name,
            icon: info.weather[0].icon,
            temp: info.main.temp,
            feels_like: info.main['feels_like'],
            temp_min: info.main['temp_min'],
            temp_max: info.main['temp_max'],
            description: info.weather[0].description,
            timezone: info.timezone,
            dt: info.dt,
            windspeed: info.wind.speed
        });
      }
    })
    .catch(error => {
      alert('Invalid City')
    });
  };

    getMap = () => {
      fetch('https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=37d624d954f00691d23b170796c345e2')
    	.then(function(data){
        $('#progress').text("Loading");
        return data.blob();
      })
      .then(function(img){
      	var dd = URL.createObjectURL(img);
        $('#progress').text("");
        $('img').attr('src', dd);
      })
    }


  handleChange(e) {
    this.setState({
      searchedCity: e.target.value
    })
  }

  search(e) {
    e.preventDefault();
    console.log('search term')
    let searchTerm = e;
    this.setState({
      searchTerm: searchTerm
    });
  }

  searchWeather(e) {
    e.preventDefault();
    this.getWeather(this.state.searchedCity)
  }

  render() {
return (
<div>

  <h1><WeatherTitle name={this.state.name} /></h1>

    <div>
      <WeatherBox
        main={this.state}
      />
    </div>
              <form className="searchfield">
              <input
                value={this.state.searchTerm}
                onChange={this.handleChange}
                placeholder="Enter City HERE ">
              </input>
                <button onClick={this.searchWeather}> click </button>
              </form>

              {/* //map function */}
              {/* <button onClick={this.getMap}>Get Image</button>
              <img src="" alt=""  width="500px" />
              <div id="progress"></div> */}
          </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
