const Organization = () => {
    const organizations = [
        {
            'organization': 'HIMA Informatika',
            'organizator': 'Kalbis Institute',
            'duration': 'Feb - Apr 2021',
            'status': 'Internship'
        },
        {
            'organization': 'Christmas Lunch',
            'organizator': 'San Egidio',
            'duration': 'Aug - Oct 2020',
            'status': 'Internship'
        },
        {
            'organization': 'Kalbispheration',
            'organizator': 'Kalbis Institute',
            'duration': 'Jul - Sep 2020',
            'status': 'Internship'
        },
        {
            'organization': 'KMK Kalbis Institute',
            'organizator': 'Kalbis Institute',
            'duration': 'Des 2017 - Des 2020',
            'status': 'Part Time'
        },
    ];

    return(
        <div>
            <h4 className="display-6" style={{fontSize:24}}> <i className="fa fa-sitemap fa-lg text-primary mx-2"></i> Organization</h4>
            <ul>
                {organizations.map((organization, id) => {
                    return (
                        <li key={id}>
                            <h6 className="display-6" style={{fontSize:20}}>{organization.organization}</h6>
                            <p className="lead" style={{fontSize:14}}><i className="fa fa-building" style={{marginRight: 5}}></i> {organization.organizator}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-clock" style={{marginRight: 5}}></i> {organization.duration}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-user" style={{marginRight: 5}}></i> {organization.status}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Organization;