import React from 'react';
import './project-card.css';

function ProjectCard({project}) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {project.demo&& (
                        <a className='project-link' href={project.demo} key={project.platform} rel="noopener noreferrer" target="_blank">
                            <div className='link-button'>
                                <img src="/images/globe.png" alt="globe"></img>&nbsp;Demo
                            </div>
                        </a>
                    )}

                    {project.github&&(
                        <a className='project-link' href={project.github} key={project.platform} rel="noopener noreferrer" target="_blank">
                            <div className='link-button'>
                                <i className="devicon-github-original"></i>&nbsp;Github
                            </div>
                        </a>
                    )}
                </div>
                <p>
                    {project.about}
                </p>
                <div className='project-tags'>
                    {project.tags.map((tag) =>{
                        return <label className='tag'>{tag}</label>    
                    })}
                </div>
            </div>
            <img src={project.image} className='project-photo' alt="project" />
        </div>
    )
}

export default ProjectCard;
