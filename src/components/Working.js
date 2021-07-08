const Working = (props) => {
    const workings = [
        {
            'title': 'IT Programmer',
            'company': 'PT Handal Guna Sarana',
            'duration': 'Feb - Apr 2021',
            'status': 'Internship'
        },
        {
            'title': 'Backend Programmer',
            'company': 'Loker Programmer',
            'duration': 'Aug - Oct 2020',
            'status': 'Internship'
        },
        {
            'title': 'Web Developer',
            'company': 'PT Lintas Banyu Lestari',
            'duration': 'Jul - Sep 2020',
            'status': 'Internship'
        },
        {
            'title': 'Private Tutor',
            'company': 'Self Employed',
            'duration': 'Des 2017 - Des 2020',
            'status': 'Part Time'
        },
    ];

    return(
        <div>
            <h4 className="display-6" style={{fontSize:24}}> <i className="fa fa-briefcase fa-lg text-success mx-2"></i> Working</h4>
            <ul>
                {workings.map((working, id) => {
                    return (
                        <li key={id}>
                            <h6 className="display-6" style={{fontSize:20}}>{working.title}</h6>
                            <p className="lead" style={{fontSize:14}}><i className="fa fa-building" style={{marginRight: 5}}></i> {working.company}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-clock" style={{marginRight: 5}}></i> {working.duration}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-user" style={{marginRight: 5}}></i> {working.status}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Working;