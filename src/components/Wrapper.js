import React from 'react';
import styled from '@emotion/styled';
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

const Wrapper = (props) => {
    
    let bg = "Clear";

    if(props.condition != null){
        if(props.condition == "Haze" || props.condition == "Fog"){
            bg="Mist";
        }
        else if(props.condition == "Ash" || props.condition == "Dust"){
            bg = "Smoke";
        }
        else if(props.condition == "Squall" || props.condition == "Tornado"){
            bg = "Rain";
        }
        else{
            bg = props.condition;
        }
    }

    const Wrap = styled.div`
        height: 100vh; 
        background: url("${process.env.PUBLIC_URL}/img/${bg}.png");
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        display: flex;
        justify-content: safe center;
        align-items: safe center;
    `

    return ( 
        <Wrap>
        <div className="main container">
            <div className="row">
              <div className="mx-auto text-center mt-5"><Titles /></div>
            </div>
            <div className="row">
              <div className="col-5-lg mx-auto text-center mt-3">
                <Form getWeather={props.getWeather}/>
              </div>
            </div>
            <div className="row">
              <div className="mx-auto mt-4">
                <Weather 
                    temperature={props.temperature}
                    city={props.city}
                    country={props.country}
                    humidity={props.humidity}
                    description={props.description}
                    feelsLike={props.feelsLike}
                    wind={props.wind}
                    unit={props.unit}
                    error={props.error}
                  />
              </div>
            </div>
          </div>
        </Wrap>
        );
}

export default Wrapper;