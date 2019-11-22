import React from 'react'
import css from '../styles/navbar.module.css'

function Navbar(props) {
    return (
        <nav className={css.Navbar_container}>
            <button onClick={props.handleClick} className={css.Navbar_btn} type="button" >
            ABOUT</button>
            <button onClick={props.handleClick} className={css.Navbar_btn} type="button" >
            SKILLS</button>
            <button onClick={props.handleClick} className={css.Navbar_btn} type="button" >
            PROJECTS</button>
            <button onClick={props.handleClick} className={css.Navbar_btn} type="button" >
            CONTACT</button>
        </nav>   
    );
}

export default Navbar;