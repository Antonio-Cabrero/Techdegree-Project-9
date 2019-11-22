import React from 'react';
import ProjectCard from '../components/ProjectCard'
import css from '../styles/projects.module.css'
import jobT from '../images/img-gallery.png'
import pomodoro from '../images/img-pomodoro.png'
import webApp from '../images/web-dashboard.png'

function ProjectContainer(props) {

    
const projectsData = [
    {
        name: "Image Gallery",
        description: "An easy and fluid image gallery with search functionality",
        url: "job.antonioc.dev",
        img: jobT,
        repo: "https://github.com/Antonio-Cabrero/Job_tracker/",
        lang: "React.js"
    },
    {
        name: "Pomodoro Timer",
        description: "A tool for increasing productivity and balancing effort and relaxation",
        url: "pomodoro.antonioc.dev",
        img: pomodoro,
        repo: "https://github.com/Antonio-Cabrero/Pomodoro_Timer",
        lang: "JavaScript, HTML and CSS",
    },
    {
        name: "Web App Dashboard",
        description: "A mockup for a Web app dash board with interactivity",
        url: "webapp.antonioc.dev",
        img: webApp,
        repo: "https://github.com/Antonio-Cabrero/Web-App-Dashboard",
        lang: "JavaScript, HTML and CSS"
    },
]


    const projectCards = projectsData.map((project, index )=> {
       return <ProjectCard 
            name={project.name}
            description={project.description}
            img={project.img}
            url={project.url}
            repo={project.repo}
            key={index}
        />
    })

    return (
        <div className={css.Projects_container}>
            <h2 className={css.Projects_title}>Projects</h2>
            <div className={css.ProjectCards_container}>
                {projectCards}
            </div>
        </div>
    );
}

export default ProjectContainer;