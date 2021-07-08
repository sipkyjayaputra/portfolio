import React from 'react';
import '../css/index.css';
import 'animate.css';
import Working from './Working';
import Organization from './Organization';
import Award from './Award';
import Certification from './Certification';
import Header from './Header';

const Profile = () => {
    return (
        <div style={{width:'100wh', height:'100vh'}} className="py-5 bg-dark">
            <div className="container text-white text-start">
                <h1 className="lead animate__animated animate__fadeInLeft" style={{opacity:0.5, fontSize: 14}}><a href="/" style={{color:'blueviolet', textDecoration:'none'}}>Welcome</a> <i className="fa fa-chevron-right fa-sm"></i> Personal Info</h1>

                <Header />
                
                <div className="animate__animated">
                    <div className="row my-5">
                        <div className="col-12 col-md-3  animate__animated animate__fadeInUp animate__slow my-3">
                            <Working />
                            <hr className="d-block d-md-none" />
                        </div>

                        <div className="col-12 col-md-3  animate__animated animate__fadeInUp animate__slow my-3">
                            <Organization />
                            <hr className="d-block d-md-none" />
                        </div>

                        <div className="col-12 col-md-3  animate__animated animate__fadeInUp animate__slow my-3">
                            <Award />
                            <hr className="d-block d-md-none" />
                        </div>

                        <div className="col-12 col-md-3  animate__animated animate__fadeInUp animate__slow my-3">
                            <Certification />
                            <hr className="d-block d-md-none" />
                        </div>
                    </div>
                </div>

                <div className="container text-end fixed-bottom">
                    <a href={'/portfolio'} className="btn btn-sm btn-animated my-3 " style={{backgroundColor:'blueviolet'}}><span className="text-white lead" style={{fontSize: 14}}>Next</span></a>
                </div>
            </div>
        </div>
    )
}

export default Profile;