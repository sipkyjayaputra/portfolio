import React from 'react';
import '../css/index.css';
import 'animate.css';
import Application from './Application';
import Header from './Header';

const Portfolio = () => {
    return (
        <div style={{width:'100wh', height:'100vh'}} className="py-3 bg-dark my-1">
            <div className="container text-white text-start">
                <h1 className="lead animate__animated animate__fadeInLeft" style={{opacity:0.5, fontSize: 14}}><a href="/" style={{color:'blueviolet', textDecoration:'none'}}>Welcome</a> <i className="fa fa-chevron-right fa-sm"></i> <a href="/profile" style={{color:'blueviolet', textDecoration:'none'}}>Personal Info</a> <i className="fa fa-chevron-right fa-sm"></i> Portfolio</h1>

                <Header />

                <Application />

                <div className="container text-end fixed-bottom">
                    <a href={'/contact'} className="btn btn-sm btn-animated my-3 " style={{backgroundColor:'blueviolet'}}><span className="text-white lead" style={{fontSize: 14}}>Next</span></a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;