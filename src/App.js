import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';
import { classes } from './App.css';

const api_key = '557408851b3ad0024ba4d1e159d04e91';
const url =
  'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=557408851b3ad0024ba4d1e159d04e91';

class App extends React.Component {
  state = {
    city: '',
    description: '',
    temperature: '',
    conditions: '',
    error: false
  };

  onGettingData = event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          ',' +
          country +
          '&appid=557408851b3ad0024ba4d1e159d04e91'
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          error: false,
          city: res.data.name,
          country: res.data.sys.country,
          temperature: res.data.main.temp,
          conditions: res.data.weather[0].main
        });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <div>
        <Titles />
        <Form call={this.onGettingData} />
        <Weather
          error={this.state.error}
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          conditions={this.state.conditions}
        />
      </div>
    );
  }
}

export default App;
