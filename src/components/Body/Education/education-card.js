import React from 'react';
import './education-card.css';

function EducationCard({item}) {
    return (
        <div className='education-card'>
            <img src={item.schoolLogo} className='education-logo' alt="education logo"/>
            <div className='education-info'>
                <label className='school-name'>{item.school}</label>
                <div>
                    <label className='degree-name'>{item.degree}</label>
                </div>
                <div className='graduation-date'>
                    <label>{item.graduation}</label>
                </div>
                <div className='courses-taken'>
                    <p>{item.courses}</p>
                </div>
        </div>
    </div>
    )
};

export default EducationCard;
