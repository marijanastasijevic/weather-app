import React, {useState} from 'react';
import './App.css';
import background from'./img/background.jpg';
import axios from 'axios'

  const key = "26a375933dd87bc9ee30065e47bb3418";
  

function App() {
  const [location, setLocation]  = useState('Belgrade');
  const [data, setData] = useState({"main": {"temp": 11, "temp_min": 4, "temp_max": 12}, 
                                    "name": "Belgrade",
                                    "sys": {"country": "RS"},
                                    "weather": [{"description": "cloudy"}]});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const searchLocation = () => {
    axios.get(url)
    .then((result) => {
      setData(result.data);
      console.log(result.data);
    });

  }

  const dateAndTime = (d) => {
    let months = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November',
      'December'
    ];
    
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
  
    return `${day}, ${month} ${date} ${year}`;

  }

  return(
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5'>
                <div className="card text-white text-center">
                    <img src={background} className="background" alt="bacground"/>
                    <div className="card-img-overlay">
                            <div className="input-group mb-5">
                                <input type="text" className="form-control search" placeholder="Search City" onChange={(event) => setLocation(event.target.value)}></input>
                                <button onClick={() => searchLocation() } className="btn btn-dark text-white" ><i className="fa fa-search"></i></button>
                            </div>  
                        <div className='display-weather bg-dark bg-opacity-50 py-5'>
                            <h2 className="card-title">{data.name}</h2>
                            <p className="card-text">{dateAndTime(new Date())}</p>
                            <hr/>

                            <i className="fa fa-cloud weather-icon"></i>
                            <h1 className='pb-5'>{Math.round(data.main.temp)}&deg;C </h1>
                            <p>{Math.round(data.main.temp_min)}&deg; / {Math.round(data.main.temp_max)}&deg;</p>
                            <p>{data.weather[0].description}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div> 
     
    
  )
}

export default App;
