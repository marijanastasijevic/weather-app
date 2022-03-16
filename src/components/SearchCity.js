
import React from 'react';
import background from'../img/background.jpg';


const SearchCity = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5'>
                <div className="card text-white text-center">
                    <img src={background} className="background" alt="bacground"/>
                    <div className="card-img-overlay">
                        <form>
                            <div className="input-group mb-5">
                                <input type="text" className="form-control" placeholder="Search City"></input>
                                <button className="btn btn-dark text-white" type="submit"><i class="fa fa-search"></i></button>
                            </div>  
                        </form>
                        <div className='display-weather bg-dark bg-opacity-50 py-5'>
                            <h2 className="card-title">Belgrade</h2>
                            <p className="card-text">Wednesday, March 16, 2022</p>
                            <hr/>

                            <i className="fa fa-cloud weather-icon"></i>
                            <h1 className='pb-5'>11&deg;C </h1>
                            <p>4&deg; / 12&deg;</p>
                            <p>Cloudy</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div> 
    );
}

export default SearchCity;