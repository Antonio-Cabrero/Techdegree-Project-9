import React from 'react'
import css from '../styles/navbar.module.css'

function Navbar(props) {
    return (
        <nav className={css.Navbar_container}>
            <button className={css.Navbar_btn} type="button" data-toggle="collapse" data-target="#about" aria-expanded="false" aria-controls="about">
            ABOUT</button>
            <button className={css.Navbar_btn} type="button" data-toggle="collapse" data-target="#skills" aria-expanded="false" aria-controls="skills">
            SKILLS</button>
            <button className={css.Navbar_btn} type="button" data-toggle="collapse" data-target="#projects" aria-expanded="false" aria-controls="projects">
            PROJECTS</button>
            <button className={css.Navbar_btn} type="button" data-toggle="collapse" data-target="#contact" aria-expanded="false" aria-controls="contact">
            CONTACT</button>
        </nav>   
    );
}

export default Navbar;