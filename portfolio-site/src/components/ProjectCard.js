import React from 'react';
import css from '../styles/projects.module.css'

function ProjectCard(props) {
    return (
        <div className={css.ProjectCard_container}>
            <img className={css.Project_img} src={props.img} alt={props.alt}></img>
            <div className={css.ProjectCard_container_title}>
                <h3 className={css.ProjectCard_title}>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className={css.ProjectCard_container_btn}>
                <a className={css.ProjectCard_btn} href={props.url}>Live Project</a>
                <a className={css.ProjectCard_btn} href={props.repo}>Repository</a>
            </div>
        </div>
    );
}

export default ProjectCard;