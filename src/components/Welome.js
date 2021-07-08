import React from 'react';
import '../css/index.css';
import 'animate.css';

const Welcome = () => {
    return (
        <div style={{width:'100wh', height:'100vh'}} className="bg-dark animate_animated animate__fadeInUp">
            <div className="container text-white text-start">
                <h1 className="display-6 animate__animated animate__bounce animate_slower" style={{opacity:0.5, paddingTop:'50vh'}}>Welcome to Personal Portfolio</h1>
                <a href={'/profile'} className="btn btn-sm btn-animated my-3" style={{backgroundColor:'blueviolet'}}><span className="text-white lead" style={{fontSize: 14}}>Let's take a look</span></a>
            </div>
        </div>
    )
}

export default Welcome;