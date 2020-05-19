import React from "react";

const Form = (props) => (
    
    <form onSubmit={props.getWeather}>

        <input type="text" name="city" placeholder="City..." className="form-control"></input>    
        <input type="text" name="country" placeholder="Country..." className="form-control"></input>  
  
        <select className="form-control" id = "unit_list">
            <option value = "metric">Celcius</option>
            <option selected="selected" value = "imperial">Fahrenheit</option>
            <option value = "kelvin">Kelvin</option>
        </select>

        <button>Get Weather</button>
              
    </form>
);

export default Form;