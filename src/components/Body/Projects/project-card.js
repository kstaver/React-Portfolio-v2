import React from 'react';
import './project-card.css';

function ProjectCard(project) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'></label>
                <div className='project-links'>
                    {project.demo&& (
                        <a className='project-link' href={project.demo}>
                            <div className='link-button'>
                                <img src={(process.env.PUBLIC_URL + "/images/demo-icon-2.png").default} className="demo" alt="icon" />demo
                            </div>
                        </a>
                    )}
                    {project.github&&(
                        <a className='project-link' href={project.github}>
                            <div className='link-button'>
                            <img src={(process.env.PUBLIC_URL + "/images/github-icon-2.png").default} className="small-github" alt="icon" /> github
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
            <img src={project.image} className='project-photo' />
        </div>
    )
}

export default ProjectCard;

