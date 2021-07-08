import CoffeeStore from '../images/coffee-store.png';
import CompanyProfile from '../images/company-profile.png';
import DeliveryApp from '../images/delivery-app.png';
import DocumentManagement from '../images/document-management.png';
import FootballApp from '../images/football-app.png';
import InformationSystem from '../images/information-system.png';
import LandingPage from '../images/landing-page.png';
import MappingAPI from '../images/mapping-api.png';
import MovieFinder from '../images/movie-finder.png';
import TrackingApp from '../images/tracking-app.png';
import PresenceApp from '../images/presensi-app.png';
import More from '../images/more.png'
import React, {useState} from 'react';

const Application = () => {
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState({
        'title': 'Coffee Store',
        'thumbnail': CoffeeStore,
    });

    const applications = [
        {
            'title': 'Coffee Store',
            'thumbnail': CoffeeStore,
        },
        {
            'title': 'Company Profile',
            'thumbnail': CompanyProfile,
        },
        {
            'title': 'Delivery App',
            'thumbnail': DeliveryApp,
        },
        {
            'title': 'Document Management',
            'thumbnail': DocumentManagement,
        },
        {
            'title': 'Football App',
            'thumbnail': FootballApp,
        },
        {
            'title': 'Information System',
            'thumbnail': InformationSystem,
        },
        {
            'title': 'Landing Page',
            'thumbnail': LandingPage,
        },
        {
            'title': 'Google Maps API',
            'thumbnail': MappingAPI,
        },
        {
            'title': 'Movie Finder',
            'thumbnail': MovieFinder,
        },
        {
            'title': 'Tracking App',
            'thumbnail': TrackingApp,
        },
        {
            'title': 'Presence App',
            'thumbnail': PresenceApp,
        },
        {
            'title': 'More...',
            'thumbnail': More,
        },
    ];

    return(
        <div className="row my-3">
            {applications.map((app, id) => {
                return (
                    <div className="col-12 col-md-3  animate__animated animate__zoomIn animate__slower my-3 text-center" key={id}>
                        <img src={app.thumbnail} alt="coffee-store" className="img-fluid thumbnail" style={{borderRadius: 18}} onClick={() => { setModal(true); setShow(app)}}></img>
                        <h6 className="display-6 my-2" style={{fontSize: 20, fontStyle:'italic'}}>{app.title}</h6>
                    </div>
                )
            })}

            {modal ? <div className="modal d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <div className="modal-dialog modal-dialog-centered modal-lg" style={{opacity:10}}>
                    <img src={show.thumbnail} alt="coffee-store" className="img-fluid" style={{borderRadius: 18}}></img>
                    <div className="modal-content" style={{opacity:1}}>
                        <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}></button>
                    </div>
                </div>
            </div> : ''}
            

            <div style={{marginBottom: 100}}></div>
        </div>
    )
}

export default Application;