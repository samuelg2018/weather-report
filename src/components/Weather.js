import React from "react";

const Weather = (props) => (
    <div>
        {/* Only show items when they have a value */}
        {props.city && props.country && <div className="outputContainer"><div id="weatherTitle">Location: </div> 
        <div id="weatherInfo"> {props.city}, {props.country}</div></div>}

        {props.description && <div className="outputContainer"><div id="weatherTitle">Condition:</div><div>{props.description}</div></div>}

        {props.temperature && 
        <div className="outputContainer">
            <div id="weatherTitle">Temperature: </div> 
            <div id="weatherInfo"> {props.temperature} 
                {props.unit == "imperial" ? (" °F") : props.unit === "metric"? (" °C") : props.unit == "kelvin"? (" °K") : null} </div>
            </div>
        }

        {props.feelsLike && 
        <div className="outputContainer">
            <div id="weatherTitle">Feels like: </div> 
            <div id="weatherInfo"> {props.feelsLike}
                {props.unit == "imperial" ? (" °F") : props.unit === "metric"? (" °C") : props.unit == "kelvin"? (" °K") : null} </div>
            </div>
        }
        {props.humidity && <div className="outputContainer"><div id="weatherTitle">Humidity: </div> 
        <div id="weatherInfo"> {props.humidity} %</div></div>}

        {props.wind && 
        <div className="outputContainer">
            <div id="weatherTitle">Wind Speed: </div> 
            <div id="weatherInfo"> {props.wind}
                {props.unit == "imperial" ? (" miles/hour") : props.unit === "metric"? (" meter/sec") : props.unit == "kelvin"? (" meter/sec") : null} </div>
            </div>
        }

        {props.error && <p>{props.error}</p>}

    </div>
)

export default Weather;
