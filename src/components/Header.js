import React from 'react';
import Profile from '../images/profile.jpeg'

const Header = () => {
    return (
        <div className="row animate__animated animate__fadeInUp justify-content-center">
            <div className="col-6 col-md-2">
                <img src={Profile} alt="profile" className="img-fluid rounded-circle mt-4" style={{opacity:0.7}} ></img>
            </div>
            <div className="col-12 px-5 col-md-6 py-5 lead" style={{fontSize:24}}>
                <p className="lead" style={{fontStyle:'italic'}}>However bad life may seem, there is always something you can do and succeed at. Where there is life, there is hope. <br/><br/> <i>Stephen Hawking</i></p>
            </div>
        </div>
    )
}

export default Header;