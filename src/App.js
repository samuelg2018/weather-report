import React, {useState} from 'react';
import Wrapper from "./components/Wrapper";


const API_Key = "ee3bea37b5ccfc98b44c8fd612ca6d84";
let bg = "clear sky";

class App extends React.Component{

  // States object. The initial state is undefined for all items.
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    condition: undefined,
    feelsLike: undefined,
    wind: undefined,
    unit: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();   // This prevents the page from reloading before the api call

    const city = e.target.elements.city.value;  
    const country = e.target.elements.country.value;
    let units = e.target.elements.unit_list.value;

    // Create a api call called api_call
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${units}&APPID=${API_Key}`);

    // Convert "api_call" to json format and store it in "data"
    const data = await api_call.json();

    // Only run this code if city is not empty
    if (city){
      // You can use use "console.log(data);" to see API data
      /* Update states from the state object. The json is stored in "data" so to access 
      temperature for example "data.main.temp" is used */
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        condition: data.weather[0].main,
        feelsLike: data.main.feels_like,
        wind: data.wind.speed,
        unit: units,
        error: "",
      });
          bg = data.weather[0].description;
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        condition: undefined,
        feelsLike: undefined,
        wind: undefined,
        unit: undefined,
        error: <div className="alert alert-danger mt-3">Please enter data before clicking the button.</div>,
      });
    }
  }

  render(){
    return(
      <div>
        <Wrapper 
          description={this.state.description } 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          condition={this.state.condition}
          feelsLike={this.state.feelsLike}
          wind={this.state.wind}
          unit={this.state.unit}
          error={this.state.error}
          getWeather={this.getWeather}
        />
      </div>
    );
  }
};

export default App;