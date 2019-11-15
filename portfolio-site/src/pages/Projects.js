import React from 'react';
import projects from '../projectsData'
import ProjectCard from '../components/ProjectCard'
import css from '../styles/projects.module.css'

function ProjectContainer(props) {

    const projectCards = projects.map(project => {
       return <ProjectCard 
            name={project.name}
            description={project.description}
            img={project.img}
            url={project.url}
            repo={project.repo}
        />
    })

    return (
        <div className={css.Projects_container}>
            {projectCards}
        </div>
    );
}

export default ProjectContainer;