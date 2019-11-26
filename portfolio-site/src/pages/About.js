import React from 'react';
import css from '../styles/about.module.css'
import profile from '../images/hello.png'

function About(props) {

    return (
        <div id="about" className={css.About_container}>
            <h2 className={css.About_h2}>About</h2>
            <div className={css.About_container_img}>
                <img className={css.About_img} src={profile} alt="Antonio Cabrero"/>
            </div>
            <div className={css.About_information}>
                <p className={css.About_intro} >
                <span>Hello!</span> <br></br>
                I'm Antonio Cabrero a Front End Web Developer.</p>
<<<<<<< HEAD
                <p className={css.About_paragraph}>I have always been a creative person. I enjoy drawing, photography and illustration. However, I felt like there was something missing. I wanted to make my creations take life. That is why I became a developer.</p>                
=======
                <p className={css.About_paragraph}>
                I have always been a creative person. I enjoy drawing, photography and illustration.
                However, I felt like there was something missing. I wanted to make my creations take life. That is why I became a developer.</p>                
>>>>>>> parent of 5e552ed5... Merge pull request #8 from Antonio-Cabrero/revert-7-develop
                <p className={css.About_paragraph}>Creating useful, interactive and user-friendly applications and websites is what I am all about.</p>
            </div>
        
        </div>
    );
}

export default About;