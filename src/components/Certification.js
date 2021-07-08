const Certification = () => {
    const certifications = [
        {
            'title': 'Membangun Progressive Web Apps',
            'issue': 'Dicoding',
            'time': 'Jul 2020',
        },
        {
            'title': 'Belajar Dasar Pemrograman Web',
            'issue': 'Dicoding',
            'time': 'Apr 2020',
        },
        {
            'title': 'Belajar Fundamental Front-End Web Development',
            'issue': 'Dicoding',
            'time': 'May 2020',
        },
        {
            'title': 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
            'issue': 'Dicoding',
            'time': 'May 2020',
        },
    ];

    return(
        <div>
            <h4 className="display-6" style={{fontSize:24}}> <i className="fa fa-award fa-lg text-info mx-2"></i> Certification</h4>
            <ul>
                {certifications.map((certification, id) => {
                    return (
                        <li key={id}>
                            <h6 className="display-6" style={{fontSize:20}}>{certification.title}</h6>
                            <p className="lead" style={{fontSize:14}}><i className="fa fa-building" style={{marginRight: 5}}></i> {certification.issue}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-clock" style={{marginRight: 5}}></i> {certification.time}</p>
                        </li>
                    )
                })}
                <li>
                    <h6 className="display-6" style={{fontSize:20}}>More ...</h6>
                </li>
            </ul>
        </div>
    )
}

export default Certification;