import React from 'react';
import './work-card.css';

function WorkCard({item}) {
    return (
        <div className='work-card'>
            <img src={item.companyLogo} className='work-logo' alt="work logo"/>
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <div>
                    <label className='position'>{item.designation}</label>
                </div>
                <div className='work-dates'>
                    <label>{item.dateJoined}</label> - <label>{item.dateEnd}</label>
                </div>
                <div className='work-description'>
                    <p>{item.work}</p>
                </div>
        </div>
    </div>
    )
};

export default WorkCard;
