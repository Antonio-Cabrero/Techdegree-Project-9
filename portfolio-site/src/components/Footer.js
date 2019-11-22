import React from 'react';
import css from '../styles/footer.module.css'
import github from '../images/svg/github-brands.svg'
import linkedIn from '../images/svg/linkedin-in-brands.svg'
import twitter from '../images/svg/twitter-brands.svg'

function Footer(props) {
    return (
        <footer className={css.Footer_container}>
            <a href='https://github.com/Antonio-Cabrero' target="_blank">
                <img src={github} className={css.Footer_socialIcon}/>
            </a> 
            <a href='https://www.linkedin.com/in/antonio-cabrero/' target="_blank">
                <img src={linkedIn} className={css.Footer_socialIcon}/> 
            </a>
            <a href='https://twitter.com/AntonioCabrero_' target="_blank">
                <img src={twitter} className={css.Footer_socialIcon}/> 
            </a>
        </footer>
    );
}

export default Footer;