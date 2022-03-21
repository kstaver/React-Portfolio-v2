import React from 'react';
import './project-card.css';

function ProjectCard(projects) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{projects.project.title}</label>
                <div className='project-links'>
                    {projects.project.demo&& (
                        <a className='project-link' href={projects.project.demo} without rel="noopener no referrer" target="_blank">
                            <div className='link-button'>
                                <img src="/images/globe.png"></img>&nbsp;Demo
                            </div>
                        </a>
                    )}

                    {projects.project.github&&(
                        <a className='project-link' href={projects.project.github} without rel="noopener no referrer" target="_blank">
                            <div className='link-button'>
                                <i class="devicon-github-original"></i>&nbsp;Github
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
            <img src={projects.image} className='project-photo' alt="project" />
        </div>
    )
}

export default ProjectCard;

