import React from 'react';
import Separator from '../../commons/separator';
import { ProjectData } from '../../data/project';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {
    const data= ProjectData;
    return (
        <div className='projects'>
            <Separator />
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard mappedData={project} />
                })}
            </div>
        </div>
    )
}

export default Projects;
