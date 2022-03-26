import {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloud, faCloudBolt, faCloudRain, faSun, faSnowflake} from "@fortawesome/free-solid-svg-icons";

function Weather(){
  const [weathers,setWeathers]=useState();
  const [weatherimg, setWeatherImg] = useState();
  function W(){
    navigator.geolocation.getCurrentPosition(WeatherA, GError);
    const API_KEY="bc8815f452854e3a7bef2c1900ca4da5";
    function WeatherA(position){
      const lat=position.coords.latitude;
      const lng=position.coords.longitude;
      getWeathers();
      async function getWeathers(){
        const json = await( await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)).json();
        setWeathers(weathers=>json.weather[0].main);
        console.log(json.weather[0].main);
        
      }
    }
    function GError(){
      alert("Location Error");
    }
  }
  useEffect(()=>{
    W();
    switch(weathers){
      case 'Clouds' :
            setWeatherImg(weatherimg=><FontAwesomeIcon icon={faCloud} size="2x"/>)
          break;
  
      case 'Thunderstorm' :
          setWeatherImg(weatherimg=><FontAwesomeIcon icon={faCloudBolt} size="2x"/>)
          break;
  
      case 'Drizzle' :
      case 'Rain' :
          setWeatherImg(weatherimg=><FontAwesomeIcon icon={faCloudRain} size="2x"/>)
          break;
  
      case 'Clear' :
          setWeatherImg(weatherimg=><FontAwesomeIcon icon={faSun} size="2x" />)
          break;
  
      case 'Snow' :
          setWeatherImg(weatherimg=><FontAwesomeIcon icon={faSnowflake} size="2x"/>)
          break;
  
      default : 
          setWeatherImg(weatherimg=><FontAwesomeIcon icon={faCloud} size="2x"/>)
          break;
  }
  },[]);
  
  return(
    <div>
      {weatherimg}
    </div>
    )
}
export default Weather;

//url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`