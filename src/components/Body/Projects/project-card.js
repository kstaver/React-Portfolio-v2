import React from 'react';
import './project-card.css';

function ProjectCard(mappedData) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{mappedData.project.title}</label>
                <div className='project-links'>
                    {mappedData.project.demo&& (
                        <a className='project-link' href={mappedData.project.demo} rel="noopener noreferrer" target="_blank">
                            <div className='link-button'>
                                <img src="/images/globe.png" alt="globe"></img>&nbsp;Demo
                            </div>
                        </a>
                    )}

                    {mappedData.project.github&&(
                        <a className='project-link' href={mappedData.project.github} rel="noopener noreferrer" target="_blank">
                            <div className='link-button'>
                                <i className="devicon-github-original"></i>&nbsp;Github
                            </div>
                        </a>
                    )}
                </div>
                <p>
                    {mappedData.project.about}
                </p>
                <div className='project-tags'>
                    {mappedData.project.tags.map((tag) =>{
                        return <label className='tag'>{tag}</label>    
                    })}
                </div>
            </div>
            <img src={mappedData.project.image} className='project-photo' alt="project" />
        </div>
    )
}

export default ProjectCard;

