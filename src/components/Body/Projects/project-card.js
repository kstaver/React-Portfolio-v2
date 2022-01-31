import React from 'react';
import './project-card.css';

function ProjectCard(projects) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{projects.project.title}</label>
                <div className='project-links'>
                    {projects.demo&& (
                        <a className='project-link' href={projects.project.demo}>
                            <div className='link-button'>
                                <img src="/images/demo-icon-2.png" className="demo" alt="icon" />Demo
                            </div>
                        </a>
                    )}
                    {projects.github&&(
                        <a className='project-link' href={projects.project.github}>
                            <div className='link-button'>
                            <img src="/images/github-icon.png" className="small-github" alt="icon2" /> Github
                            </div>
                        </a>
                    )}
                </div>
                <p>
                    {projects.project.about}
                </p>
                <div className='project-tags'>
                    {projects.project.tags.map((tag) =>{
                        return <label className='tag'>{tag}</label>    
                    })}
                </div>
            </div>
            <img src={projects.project.image} className='project-photo' alt="project" />
        </div>
    )
}

export default ProjectCard;

