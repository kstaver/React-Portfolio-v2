import React from 'react';
import './project-card.css';
import githubIcon from '../../../assets/images/github-24.png';
import demoIcon from '../../../assets/images/demo-icon-2.png';

function ProjectCard(project) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.project.title}</label>
                <div className='project-links'>
                    {project.demo&& (
                        <a className='project-link' href={project.project.demo}>
                            <div className='link-button'>
                                <img src={demoIcon} className="demo" alt="icon" />demo
                            </div>
                        </a>
                    )}
                    {project.github&&(
                        <a className='project-link' href={project.project.github}>
                            <div className='link-button'>
                            <img src={githubIcon} className="small-github" alt="icon" /> github
                            </div>
                        </a>
                    )}
                </div>
                <p>
                    {project.project.about}
                </p>
                <div className='project-tags'>
                    {project.project.tags.map((tag) =>{
                        return <label className='tag'>{tag}</label>    
                    })}
                </div>
            </div>
            <img src={project.project.image} className='project-photo' alt="project" />
        </div>
    )
}

export default ProjectCard;

