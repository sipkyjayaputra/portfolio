import React from 'react';

const Social = () => {

    const socials = [
        {
            'name': 'LinkedIn',
            'url': 'https://www.linkedin.com/in/sipky-jaya-putra-a7062b1aa/',
            'icon': 'fab fa-linkedin'
        },
        {
            'name': 'Facebook',
            'url': 'https://www.facebook.com/sipky/',
            'icon': 'fab fa-facebook'
        },
        {
            'name': 'Twitter',
            'url': 'https://twitter.com/fasipky101',
            'icon': 'fab fa-twitter'
        },
        {
            'name': 'Instagram',
            'url': 'https://www.instagram.com/fasipky10/',
            'icon': 'fab fa-instagram'
        },
        {
            'name': 'Gmail',
            'url': 'mailto:sipkyjayaptra@gmail.com',
            'icon': 'fa fa-envelope'
        },
    ];

    return(
        <div className="row justify-content-center my-5 text-center">
            <div className="col-md-3 col-12 text-center">
                <h1 className="display-6 mb-3 animate__animated animate__bounce">Let's Connect !</h1>

                {socials.map((social, id) => {
                    return (
                        <a href={social.url} className="mx-2 animate__animated animate__fadeInLeft animate__slower" target="_blank" rel="noreferrer">
                            <i className={social.icon} style={{fontSize:38}}></i>
                        </a>
                    )
                })}            

                <div style={{marginBottom: 100}}></div>
            </div>
        </div>
    )
}

export default Social;