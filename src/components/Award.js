const Award = () => {
    const awards = [
        {
            'award': 'Mahasiswa Berprestasi IPS 4.00',
            'issue': 'Kalbis Institute',
            'time': 'Sep 2019',
        },
        {
            'award': 'Mahasiswa Berprestasi IPS 4.00',
            'issue': 'Kalbis Institute',
            'time': 'Sep 2018',
        },
        {
            'award': 'Mahasiswa Berprestasi IPS 4.00',
            'issue': 'Kalbis Institute',
            'time': 'Feb 2018',
        },
    ];

    return(
        <div>
            <h4 className="display-6" style={{fontSize:24}}> <i className="fa fa-trophy fa-lg text-warning mx-2"></i> Awards</h4>
            <ul>
                {awards.map((award, id) => {
                    return (
                        <li key={id}>
                            <h6 className="display-6" style={{fontSize:20}}>{award.award}</h6>
                            <p className="lead" style={{fontSize:14}}><i className="fa fa-building" style={{marginRight: 5}}></i> {award.issue}</p>
                            <p className="lead" style={{fontSize:14, marginTop: -14}}><i className="fa fa-clock" style={{marginRight: 5}}></i> {award.time}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Award;