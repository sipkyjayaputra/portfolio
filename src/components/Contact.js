import React from 'react';
import Social from './Social';
import Header from './Header';
import '../css/index.css';
import 'animate.css';

const Contact = () => {
    return (
        <div style={{width:'100wh', height:'100vh'}} className="py-5 bg-dark">
            <div className="container text-white text-start">
                <h1 className="lead animate__animated animate__fadeInLeft animate_faster" style={{opacity:0.5, fontSize: 14}}><a href="/" style={{color:'blueviolet', textDecoration:'none'}}>Welcome</a> <i className="fa fa-chevron-right fa-sm"></i> <a href="/profile" style={{color:'blueviolet', textDecoration:'none'}}>Personal Info</a> <i className="fa fa-chevron-right fa-sm"></i> <a href="/portfolio" style={{color:'blueviolet', textDecoration:'none'}}>Portfolio</a> <i className="fa fa-chevron-right fa-sm"></i> Contact</h1>

                <Header />

                <Social />
            </div>
        </div>
    )
}

export default Contact;